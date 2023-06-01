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
    <div v-show="props.show" class="border-zinc-700 p-2 my-2">
        <span class='text-xl leading-6 flex items-center gap-2 my-4'>
            Dados do Login
        </span>

        <form class='my-4 w-full flex flex-col gap-2' @submit.prevent="handleSubmit">
            <div class="flex flex-row gap-2">
                <input type="text" placeholder='Nome' v-model="authName" class='md:min-w-[100px] w-52 h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500
                 focus:outline-blue-500 focus:outline outline-none' />
                <input type="text" placeholder='Usuário ou Ramal' :required="true" v-model="authUsername" class='md:min-w-[100px] w-52 h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500
                 focus:outline-blue-500 focus:outline outline-none' />
            </div>
            <input type="password" placeholder='Senha' :required="true" v-model="authSecret" class='md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500
                 focus:outline-blue-500 focus:outline outline-none' />
            <input type="text" placeholder='Domínio' :required="true" v-model="authDomain" class='md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500
                 focus:outline-blue-500 focus:outline outline-none' />
            <div class="flex flex-row gap-2">
                <input type="number" placeholder='Porta' :required="true" v-model="authPort" class='md:min-w-[100px] w-52 h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500
                 focus:outline-blue-500 focus:outline outline-none' />
                <select v-model="authTransport" required
                    class='md:min-w-[100px] w-52 h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:outline-blue-500 focus:outline outline-none'>
                    <option value="udp">Protocolo UDP</option>
                    <option value="tcp">Protocolo TCP</option>
                </select>
            </div>

            <footer class='flex gap-2 mt-2'>

                <button type='submit' title='Salvar' aria-labelledby='Salvar'
                    class='bg-zinc-800 rounded-lg py-1 w-24 flex flex-1 flex-row items-center justify-center gap-2 border-2 border-transparent
                hover:border-blue-500 hover:text-green-500 disabled:hover:text-zinc-100 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear disabled:opacity-50 disabled:border-2'
                    :disabled="registering || props.agentStatus === 'Conectado' || props.agentStatus === 'Desconectando'">
                    <component :is="registering ? PhSpinner : PhSignIn" :size="20"
                        :class="{ 'animate-spin': registering }" />{{ registering
                            ? 'Registrando' :
                            'Conectar' }}
                </button>
                <button type='button' title='Desconectar' aria-labelledby='Desconectar' @click="handleLogout"
                    class='bg-zinc-800 rounded-lg py-1 w-24 flex flex-1 flex-row items-center justify-center gap-2 border-2 border-transparent
                hover:border-blue-500 hover:text-red-500 disabled:hover:text-zinc-100 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear disabled:opacity-50 disabled:border-2'
                    :disabled="unregistering || ['Desconectado', 'Registro falhou'].includes(props.agentStatus)">
                    <component :is="unregistering ? PhSpinner : PhSignOut" :size="20"
                        :class="{ 'animate-spin': unregistering }" />{{ unregistering
                            ? 'Desconectando' :
                            'Desconectar' }}
                </button>
            </footer>
        </form>
    </div>
</template>
