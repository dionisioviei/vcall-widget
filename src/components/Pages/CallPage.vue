<script setup lang="ts">
import { onUnmounted, ref, watchEffect } from 'vue';
import { PhPhoneCall, PhDotOutline, PhPause, PhMicrophoneSlash, PhPhoneDisconnect, PhCommand, PhMicrophone } from "@phosphor-icons/vue";
import { formatTime } from '../../utils/formatTime';

const numberToCall = ref('');
const numberToCallInput = ref<HTMLInputElement | null>(null);
const dtmfCommand = ref('');
const commandBtnDisabled = ref(false);
const commandBtnTimer = ref(0);

const focusTimeout = ref<null | number>(null);

const props = defineProps<{
    show: boolean; callDuration: null | number; extenStatus: string; agentStatus: string; inCallStatus: {
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
}>()

function handleCall() {
    if (!parseInt(numberToCall.value, 10)) {
        return;
    }
    props.startCall(numberToCall.value);
}

function handleSendDTMF() {
    if (!dtmfCommand.value.trim()) {
        return;
    }
    commandBtnDisabled.value = true;
    props.sendDTMF(dtmfCommand.value)
    commandBtnTimer.value = setTimeout(() => {
        commandBtnDisabled.value = false;
    }, 1500);
}

watchEffect(() => {
    if (props.show && numberToCallInput.value) {
        focusTimeout.value = setTimeout(() => numberToCallInput.value?.focus());
    }
});

onUnmounted(() => {
    focusTimeout.value && clearTimeout(focusTimeout.value);
});

onUnmounted(() => {
    commandBtnTimer.value && clearTimeout(commandBtnTimer.value);
});
</script>

<template>
    <div v-show="props.show" class="tw-p-2 tw-my-2" id="callpage">
        <div v-show="!props.inCallStatus.inCall">
            <span class='tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4'>
                Nova Chamada
            </span>

            <form class='tw-my-4 tw-w-full' @submit.prevent="handleCall">
                <input type="text" ref="numberToCallInput" placeholder='Digite um número' :required="true" autocomplete="tel tel-extension tel-local tel-national mobile"
                    v-model="numberToCall"
                    class='md:tw-min-w-[304px] tw-w-full tw-h-14 tw-p-0 tw-text-2xl tw-text-center tw-placeholder-zinc-400 tw-text-zinc-100 border-zinc-800 tw-bg-zinc-800 focus:tw-bg-zinc-800 tw-rounded-md focus:tw-border-blue-500 focus:tw-ring-blue-500 focus:tw-ring-1 focus:tw-outline-none' />

                <div class='tw-flex tw-gap-2 tw-mt-2'>

                    <button type='submit' title='Ligar' aria-labelledby='Ligar'
                        class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'>
                        <PhPhoneCall :size="20" />Ligar
                    </button>
                </div>
            </form>
        </div>

        <div v-show="props.inCallStatus.inCall && props.agentStatus === 'Em chamada'" id="outgoingcall">
            <span class='tw-text-sm tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4 tw-italic tw-text-zinc-300'>
                <PhDotOutline :size="32" color="green" weight="fill" />Em chamada com <span class="tw-text-white">{{
                    props.inCallStatus.status?.number }}</span> <span class="tw-text-zinc-400">{{
        formatTime(props.callDuration || 0)
    }}
                </span>
            </span>
            <div class='tw-flex tw-py-8 tw-gap-2 tw-w-full'>
                <button type='button' class='tw-rounded-lg tw-py-5 tw-w-24 tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'
                    :class="{ 'tw-bg-orange-500': props.inCallStatus.status?.onHold, 'tw-bg-zinc-800': !props.inCallStatus.status?.onHold, 'tw-opacity-50 tw-cursor-not-allowed': props.extenStatus !== 'incall' }"
                    @click="props.toggleHold" :disabled="props.extenStatus !== 'incall'">
                    <PhPause :size="32" />
                    <span>{{ props.inCallStatus.status?.onHold ? 'Em espera' : 'Espera' }}</span>
                </button>
                <button type='button' class='tw-rounded-lg tw-py-5 tw-w-28 tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'
                    :class="{ 'tw-bg-orange-500': props.inCallStatus.status?.muted, 'tw-bg-zinc-800': !props.inCallStatus.status?.muted, 'tw-opacity-50 tw-cursor-not-allowed': props.extenStatus !== 'incall' }"
                    @click="props.toggleMute" :disabled="props.extenStatus !== 'incall'">
                    <component :is="props.inCallStatus.status?.muted ? PhMicrophoneSlash : PhMicrophone" :size="32" />
                    <span>{{ props.inCallStatus.status?.muted ? 'Mudo' : 'Mutar' }}</span>
                </button>
                <div class="tw-flex tw-flex-col">
                    <input type="text" placeholder="*2"
                        class="tw-w-28 tw-rounded-t-lg tw-bg-zinc-700 tw-p-2 tw-shadow-inner tw-shadow-zinc-900 tw-h-15" v-model="dtmfCommand"
                        @keyup.enter="handleSendDTMF" required />
                    <button ref="commandRef" type='button' class='tw-bg-zinc-800 tw-rounded-b-lg tw-py-2 tw-w-28 tw-flex tw-flex-1 tw-flex-col tw-items-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'
                        :class="{ 'tw-opacity-50 tw-cursor-not-allowed': props.extenStatus !== 'incall' || commandBtnDisabled }"
                        @click="handleSendDTMF" :disabled="props.extenStatus !== 'incall' || commandBtnDisabled">
                        <PhCommand :size="32" />
                        <span>Discar</span>
                    </button>
                </div>
                <button type='button' class='tw-bg-red-800 tw-rounded-lg tw-py-5 tw-w-28 tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'
                    @click="props.hangup">
                    <PhPhoneDisconnect :size="32" />
                    <span>Desligar</span>
                </button>
            </div>
        </div>

        <div v-show="props.inCallStatus.inCall && props.agentStatus === 'Recebendo chamada'" id="incomingcall">
            <span class='tw-text-sm tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4 tw-italic tw-text-zinc-300'>
                <PhDotOutline :size="32" color="orange" weight="fill" />Recebendo chamada de <span class="tw-text-white">{{
                    props.inCallStatus.status?.number }}</span>
            </span>
            <div class='tw-flex tw-py-8 tw-gap-2 tw-w-full'>
                <button type='button' class='tw-bg-green-800 tw-rounded-lg tw-py-5 tw-w-24 tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'
                    @click="props.answer">
                    <PhPhoneCall :size="32" />
                    <span>Atender</span>
                </button>
                <button type='button' class='tw-bg-red-800 tw-rounded-lg tw-py-5 tw-w-28 tw-flex tw-flex-1 tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'
                    @click="props.hangup">
                    <PhPhoneDisconnect :size="32" />
                    <span>Desligar</span>
                </button>
            </div>
        </div>
    </div>
</template>
