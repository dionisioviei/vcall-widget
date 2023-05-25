<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
import { PhPhoneCall, PhSignIn, PhNotebook, PhArrowLeft, PhUser } from "@phosphor-icons/vue";
import CloseButton from '../CloseButton.vue';
import CallPage from './CallPage.vue';
import LoginPage from './LoginPage.vue';
import HistoryPage from './HistoryPage.vue';
import { getCredentials } from '../../store/credentials';

const nameHeader = ref<null | string>('');

const props = defineProps<{
    agentStatus: string; callDuration: null | number; extenStatus: string; inCallStatus: {
        inCall: boolean;
        status?: {
            muted: boolean;
            onHold: boolean;
            number: string;
            onSpeaker: boolean;
            incallId: string;
            duration: number;
            callDirection: "incoming" | "outgoing";
        } | undefined;
    }; answer: () => void; hangup: () => void; sendDTMF: (dtmfToSend: string) => void; startCall: (numberToCall: string) => void; toggleHold: () => void; toggleMute: () => void;
    register: ({ authuser, secret, domain, port, name, transport, }: {
        authuser: string;
        secret: string;
        domain: string;
        port: number;
        name: string;
        transport: "udp" | "tcp";
    }) => void; unregister: () => void
}>();

const Routes = [{
    name: 'Call',
    label: 'Ligar',
    icon: PhPhoneCall,
}, {
    name: 'Login',
    label: 'Conectar',
    icon: PhSignIn,

}, {
    name: 'History',
    label: 'Histórico',
    icon: PhNotebook,

}] as const;

type RouteName = typeof Routes[number]['name'] | "Menu";

const activePage = ref<RouteName>("Menu");

function changePage(page: RouteName) {
    activePage.value = page;
}

onMounted(() => {
    const { authuser, name } = getCredentials();
    nameHeader.value = name || authuser;
})

watch(props, () => {
    if (props.agentStatus === 'Conectado') {
        const { authuser, name } = getCredentials();
        nameHeader.value = name || authuser;
    }
});

watchEffect(() => {
    if (['Em chamada', 'Recebendo chamada'].includes(props.agentStatus) && activePage.value !== 'Call') {
        changePage('Call');
    }
});

</script>

<template>
    <div
        class='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-md shadow-slate-800 w-[calc(100vw-2rem)] md:w-auto'>
        <header>
            <button
                v-show="activePage !== 'Menu' && ['Em chamada', 'Recebendo chamada'].includes(props.agentStatus) === false"
                type='button' title='Voltar' aria-label='Voltar' @click="changePage('Menu')"
                className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 flex flex-row-reverse justify-center items-center'>
                Voltar
                <PhArrowLeft weight='bold' />
            </button>
            <span class='text-xl leading-6 flex flex-row justify-center items-center'>
                <PhUser class="mr-2" />{{ nameHeader || 'Conecte-se para ligar' }}
            </span>

            <CloseButton />
        </header>

        <div class='flex py-8 gap-2 w-full' v-show="activePage === 'Menu'">
            <button v-for="{ icon, name, label } in Routes" :key="name" type='button' :title="name"
                @click="changePage(name)"
                class='bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear disabled:border-0 disabled:opacity-50 disabled:cursor-not-allowed'
                :disabled="['Desconectado', 'Conectando...', 'Registro falhou'].includes(props.agentStatus) && name !== 'Login'">
                <component :is="icon" :size="32" />
                <span>{{ label }}</span>
            </button>
        </div>

        <CallPage :show="activePage === 'Call'" :answer="props.answer" :hangup="props.hangup" :sendDTMF="props.sendDTMF"
            :toggleHold="props.toggleHold" :toggleMute="props.toggleMute" :startCall="props.startCall"
            :inCallStatus="props.inCallStatus" :callDuration="callDuration" :agentStatus="props.agentStatus"
            :extenStatus="props.extenStatus" />
        <LoginPage :show="activePage === 'Login'" :register="props.register" :unregister="props.unregister" />
        <HistoryPage :show="activePage === 'History'" />

        <footer class='text-xs text-neutral-400 w-full text-center'>
            <div class="w-full text-white border-t-2 text-center border-b-2 py-2 rounded-lg px-1 mb-2 tracking-wider"
                :class="{
                    'border-green-700 bg-green-700': props.agentStatus === 'Conectado',
                    'border-red-700 bg-red-700': ['Registro falhou', 'Desconectado'].includes(props.agentStatus),
                    'border-orange-700 bg-orange-700 animate-pulse': ['Desconectando', 'Conectando...', 'Em chamada', 'Recebendo chamada'].includes(props.agentStatus),
                }">
                <span>{{ props.agentStatus }}</span>
            </div>
            Feito com <b class="animate-pulse">♥</b> pela <a href='https://digital.vittel.com.br/vittel-cloud-talk/'
                target='_blank' class='underline underline-offset-2 hover:text-blue-400 text-xs'>Vittel</a>

        </footer>
    </div>
</template>

