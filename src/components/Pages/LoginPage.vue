<script setup lang="ts">
import { computed, onUnmounted, ref, watchEffect } from 'vue';
import { PhFloppyDisk, PhSpinner, PhSignIn, PhSignOut } from "@phosphor-icons/vue";
import { getCredentials, setCredentials } from '../../store/credentials';

const { authuser, domain, name, port, secret, transport } = getCredentials();

const authUsername = ref(authuser || '');
const authName = ref(name || '');
const authSecret = ref(secret || '');
const authDomain = ref(domain || '');
const authPort = ref(port);
const unregistering = ref(false);
const authTransport = ref<'udp' | 'tcp'>('udp');

const props = defineProps<{
    show: boolean; register: ({ authuser, secret, domain, port, name, transport, }: {
        authuser: string;
        secret: string;
        domain: string;
        port: number;
        name: string;
        transport: "udp" | "tcp";
    }) => void; unregister: () => void; agentStatus: string;
}>();


function handleSubmit() {
    setCredentials({
        authuser: authUsername.value,
        domain: authDomain.value,
        name: authName.value || name || authUsername.value,
        port: authPort.value,
        secret: authSecret.value,
        transport: authTransport.value
    });
    props.register({
        authuser: authUsername.value,
        domain: authDomain.value,
        name: authName.value || name || authUsername.value,
        port: authPort.value,
        secret: authSecret.value,
        transport: authTransport.value
    });
}

function handleLogout() {
    props.unregister();
}

watchEffect(() => {
    console.log('unregistering', unregistering.value, props.agentStatus);
    if (unregistering.value && props.agentStatus === 'Desconectado') {
        unregistering.value = false;
    }
});

const registering = computed(() => {
    return ['Conectando...'].includes(props.agentStatus)
});

</script>

<template>
    <div v-show="props.show" class="tw-border-zinc-700 tw-p-2 tw-my-2">
        <span class='tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4'>
            Dados do Login
        </span>

        <form class='tw-my-4 tw-w-full tw-flex tw-flex-col tw-gap-2' @submit.prevent="handleSubmit">
            <div class="tw-flex tw-flex-row tw-gap-2">
                <input type="text" placeholder='Nome' v-model="authName" class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-outline tw-outline-none' />
                <input type="text" placeholder='Usuário ou Ramal' :required="true" v-model="authUsername" class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-outline tw-outline-none' />
            </div>
            <input type="password" placeholder='Senha' :required="true" v-model="authSecret" class='md:tw-min-w-[304px] tw-w-full tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-outline tw-outline-none' />
            <input type="text" placeholder='Domínio' :required="true" v-model="authDomain" class='md:tw-min-w-[304px] tw-w-full tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-outline tw-outline-none' />
            <div class="tw-flex tw-flex-row tw-gap-2">
                <input type="number" placeholder='Porta' :required="true" v-model="authPort" class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-outline tw-outline-none' />
                <select v-model="authTransport" required
                    class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500 focus:tw-outline-blue-500 focus:tw-outline tw-outline-none'>
                    <option value="udp">Protocolo UDP</option>
                    <option value="tcp">Protocolo TCP</option>
                </select>
            </div>

            <div class='tw-flex tw-gap-2 tw-mt-2'>

                <button type='submit' title='Salvar' aria-labelledby='Salvar'
                    class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 hover:tw-text-green-500 disabled:hover:tw-text-zinc-100 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear disabled:tw-opacity-50 disabled:tw-border-2'
                    :disabled="registering || props.agentStatus === 'Conectado' || props.agentStatus === 'Desconectando'">
                    <component :is="registering ? PhSpinner : PhSignIn" :size="20"
                        :class="{ 'tw-animate-spin': registering }" />{{ registering
                            ? 'Registrando' :
                            'Conectar' }}
                </button>
                <button type='button' title='Desconectar' aria-labelledby='Desconectar' @click="handleLogout"
                    class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 hover:tw-text-red-500 disabled:hover:tw-text-zinc-100 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear disabled:tw-opacity-50 disabled:tw-border-2'
                    :disabled="unregistering || ['Desconectado', 'Registro falhou'].includes(props.agentStatus)">
                    <component :is="unregistering ? PhSpinner : PhSignOut" :size="20"
                        :class="{ 'tw-animate-spin': unregistering }" />{{ unregistering
                            ? 'Desconectando' :
                            'Desconectar' }}
                </button>
            </div>
        </form>
    </div>
</template>