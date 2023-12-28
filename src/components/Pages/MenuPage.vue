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
    label: 'Conexão',
    icon: PhSignIn,

}, {
    name: 'History',
    label: 'Histórico',
    icon: PhNotebook,

}] as const;

type RouteName = typeof Routes[number]['name'] | "Menu";

const activePage = ref<RouteName>("Menu");
const click2call = ref<undefined | string>(undefined);

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
        class='tw-bg-zinc-900 tw-p-4 tw-relative tw-rounded-2xl tw-mb-4 tw-flex tw-flex-col tw-items-center tw-shadow-md tw-shadow-slate-800 tw-w-[calc(100vw-2rem)] md:tw-w-auto'>
        <header>
            <button
                v-show="activePage !== 'Menu' && ['Em chamada', 'Recebendo chamada'].includes(props.agentStatus) === false"
                type='button' title='Voltar' aria-label='Voltar' @click="changePage('Menu')"
                className='tw-top-4 tw-left-4 tw-absolute text-zinc-400 hover:text-zinc-100 tw-flex tw-flex-row-reverse tw-justify-center tw-items-center  tw-bg-transparent'>
                Voltar
                <PhArrowLeft weight='bold' />
            </button>
            <span
                class='tw-text-xl tw-leading-6 tw-flex tw-flex-row tw-justify-start tw-items-center tw-truncate tw-text-clip tw-overflow-hidden'>
                <PhUser class="tw-mr-2" />{{ nameHeader || 'Sem usuário' }}
            </span>

            <CloseButton />
        </header>

        <div class='tw-flex tw-py-8 tw-gap-2 tw-w-full' v-show="activePage === 'Menu'">
            <button v-for="{ icon, name, label } in Routes" :key="name" type='button' :title="name"
                @click="changePage(name)"
                class='tw-bg-zinc-800 tw-rounded-lg tw-py-5 tw-w-24 tw-flex tw-flex-1 tw-flex-col tw-items-center tw-gap-2 focus:tw-outline tw-outline-none
                hover:tw-outline-blue-500 focus:tw-outline-blue-500 tw-transition-all tw-duration-400 tw-ease-linear disabled:tw-outline-none disabled:tw-opacity-50 disabled:tw-cursor-not-allowed'
                :disabled="['Desconectado', 'Conectando...', 'Registro falhou'].includes(props.agentStatus) && name !== 'Login'">
                <component :is="icon" :size="32" />
                <span>{{ label }}</span>
            </button>
        </div>

        <CallPage :show="activePage === 'Call'" :answer="props.answer" :hangup="props.hangup" :sendDTMF="props.sendDTMF"
            :toggleHold="props.toggleHold" :toggleMute="props.toggleMute" :startCall="props.startCall"
            :inCallStatus="props.inCallStatus" :callDuration="callDuration" :agentStatus="props.agentStatus"
            :extenStatus="props.extenStatus" :click2call="click2call" />
        <LoginPage :show="activePage === 'Login'" :register="props.register" :unregister="props.unregister"
            :agentStatus="agentStatus" />
        <HistoryPage :show="activePage === 'History'" />

        <div class='tw-bg-zinc-900 tw-text-xs tw-text-neutral-400 tw-w-full tw-text-center'>
            <div class="tw-w-full tw-text-white tw-border-t-2 tw-text-center tw-border-b-2 tw-py-2 tw-rounded-lg tw-px-1 tw-mb-2 tw-tracking-wider"
                :class="{
                    'tw-border-green-700 tw-bg-green-700': props.agentStatus === 'Conectado',
                    'tw-border-red-700 tw-bg-red-700': ['Registro falhou', 'Desconectado'].includes(props.agentStatus),
                    'tw-border-orange-700 tw-bg-orange-700 tw-animate-pulse': ['Desconectando', 'Conectando...', 'Em chamada', 'Recebendo chamada'].includes(props.agentStatus),
                }">
                <span>{{ props.agentStatus }}</span>
            </div>
            Feito com <b class="tw-animate-pulse">♥</b> pela <a href='https://digital.vittel.com.br/vittel-cloud-talk/'
                target='_blank' class='tw-underline tw-underline-offset-2 hover:tw-text-blue-400 tw-text-xs'>Vittel</a>

        </div>
    </div>
</template>
