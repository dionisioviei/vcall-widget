<script setup lang="ts">
import { onUnmounted, ref, watchEffect } from 'vue';
import { PhPhoneCall, PhDotOutline, PhPause, PhMicrophoneSlash, PhPhoneDisconnect, PhCommand, PhMicrophone } from "@phosphor-icons/vue";
import { formatTime } from '../../utils/formatTime';

const numberToCall = ref('');
const numberToCallInput = ref<HTMLInputElement | null>(null);
const dtmfCommand = ref('');

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
    props.startCall(numberToCall.value);
}

watchEffect(() => {
    if (props.show && numberToCallInput.value) {
        focusTimeout.value = setTimeout(() => numberToCallInput.value?.focus());
    }
});

onUnmounted(() => {
    focusTimeout.value && clearTimeout(focusTimeout.value);
});
</script>

<template>
    <div v-show="props.show" class="p-2 my-2" id="callpage">
        <div v-show="!props.inCallStatus.inCall">
            <span class='text-xl leading-6 flex items-center gap-2 my-4'>
                Nova Chamada
            </span>

            <form class='my-4 w-full' @submit.prevent="handleCall">
                <input type="text" ref="numberToCallInput" placeholder='Digite um número' :required="true"
                    v-model="numberToCall"
                    class='md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none' />

                <footer class='flex gap-2 mt-2'>

                    <button type='submit' title='Ligar' aria-labelledby='Ligar'
                        class='bg-zinc-800 rounded-lg py-1 w-24 flex flex-1 flex-row items-center justify-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'>
                        <PhPhoneCall :size="20" />Ligar
                    </button>
                </footer>
            </form>
        </div>

        <div v-show="props.inCallStatus.inCall && props.agentStatus === 'Em chamada'" id="outgoingcall">
            <span class='text-sm leading-6 flex items-center gap-2 my-4 italic text-zinc-300'>
                <PhDotOutline :size="32" color="green" weight="fill" />Em chamada com <span class="text-white">{{
                    props.inCallStatus.status?.number }}</span> <span class=" text-zinc-400">{{
        formatTime(props.callDuration || 0)
    }}
                </span>
            </span>
            <div class='flex py-8 gap-2 w-full'>
                <button type='button' class='rounded-lg py-5 w-24 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
                    :class="{ 'bg-orange-500': props.inCallStatus.status?.onHold, 'bg-zinc-800': !props.inCallStatus.status?.onHold, 'opacity-50 cursor-not-allowed': props.extenStatus !== 'incall' }"
                    @click="props.toggleHold" :disabled="props.extenStatus !== 'incall'">
                    <PhPause :size="32" />
                    <span>{{ props.inCallStatus.status?.onHold ? 'Em espera' : 'Espera' }}</span>
                </button>
                <button type='button' class='rounded-lg py-5 w-28 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
                    :class="{ 'bg-orange-500': props.inCallStatus.status?.muted, 'bg-zinc-800': !props.inCallStatus.status?.muted, 'opacity-50 cursor-not-allowed': props.extenStatus !== 'incall' }"
                    @click="props.toggleMute" :disabled="props.extenStatus !== 'incall'">
                    <component :is="props.inCallStatus.status?.muted ? PhMicrophoneSlash : PhMicrophone" :size="32" />
                    <span>{{ props.inCallStatus.status?.muted ? 'Mudo' : 'Mutar' }}</span>
                </button>
                <div class="flex flex-col">
                    <input type="text" placeholder="*2"
                        class="w-28 rounded-t-lg bg-zinc-700 p-2 shadow-inner shadow-zinc-900 h-15" v-model="dtmfCommand"
                        required />
                    <button type='button' class='bg-zinc-800 rounded-b-lg py-2 w-28 flex flex-1 flex-col items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
                        :class="{ 'opacity-50 cursor-not-allowed': props.extenStatus !== 'incall' }"
                        @click="props.sendDTMF(dtmfCommand)" :disabled="props.extenStatus !== 'incall'">
                        <PhCommand :size="32" />
                        <span>Discar</span>
                    </button>
                </div>
                <button type='button' class='bg-red-800 rounded-lg py-5 w-28 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
                    @click="props.hangup">
                    <PhPhoneDisconnect :size="32" />
                    <span>Desligar</span>
                </button>
            </div>
        </div>

        <div v-show="props.inCallStatus.inCall && props.agentStatus === 'Recebendo chamada'" id="incomingcall">
            <span class='text-sm leading-6 flex items-center gap-2 my-4 italic text-zinc-300'>
                <PhDotOutline :size="32" color="orange" weight="fill" />Recebendo chamada de <span class="text-white">{{
                    props.inCallStatus.status?.number }}</span>
            </span>
            <div class='flex py-8 gap-2 w-full'>
                <button type='button' class='bg-green-800 rounded-lg py-5 w-24 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
                    @click="props.answer">
                    <PhPhoneCall :size="32" />
                    <span>Atender</span>
                </button>
                <button type='button' class='bg-red-800 rounded-lg py-5 w-28 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent
                hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
                    @click="props.hangup">
                    <PhPhoneDisconnect :size="32" />
                    <span>Desligar</span>
                </button>
            </div>
        </div>
    </div>
</template>
