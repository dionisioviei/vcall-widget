<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import { PhPhoneCall, PhArrowCircleLeft, PhArrowCircleRight, PhArrowBendRightDown, PhPhoneIncoming, PhPhoneOutgoing } from "@phosphor-icons/vue";
import { getCallHistory, getLastCallRecording } from '../../store/callHistory';

const callHistory = ref<null | Array<{
    number: string;
    duration: string;
    date: string;
    callDirection: string | null;
}>>(null);
const maxPages = ref(0);
const currentPage = ref(1);
const perPage = ref(20);
const lastCallAudio = ref<string | null>(null);
const lastCallAudioPlayer = ref<null | HTMLAudioElement[]>(null);

const props = defineProps<{ show: boolean; }>()

onMounted(() => {
    const { history, totalPages } = getCallHistory(currentPage.value, perPage.value);
    callHistory.value = history;
    maxPages.value = totalPages;
});

watch(props, () => {
    if (props.show) {
        const { history, totalPages } = getCallHistory(currentPage.value, perPage.value);
        callHistory.value = history;
        maxPages.value = totalPages;
        lastCallAudio.value = getLastCallRecording();
    } else {
        if (lastCallAudioPlayer.value && lastCallAudioPlayer.value[0]) {
            lastCallAudioPlayer.value[0].pause();
        }
    }
});

function handleDate(date: string) {
    if (new Date().toLocaleString().split(',')[0] === new Date(date).toLocaleString().split(',')[0]) {
        return `hoje ás ${new Date(date).toLocaleString().split(',')[1]}`;
    }
    return new Date(date).toLocaleString().replace(',', ' ás');
}

function handlePageChange(el: any) {
    if (el.target.value === '' || isNaN(parseInt(el.target.value))) {
        return;
    }
    if (parseInt(el.target.value) > maxPages.value || parseInt(el.target.value) <= 0) {
        return;
    }
    currentPage.value = el.target.value ? el.target.value : '1'
    return;
}

watchEffect(() => {
    if (currentPage.value <= maxPages.value && currentPage.value > 0) {
        const { history, totalPages } = getCallHistory(currentPage.value, perPage.value);
        callHistory.value = history;
        maxPages.value = totalPages;
    }
})

watchEffect(() => {
    if (lastCallAudioPlayer.value && lastCallAudio.value && currentPage.value === 1) {
        const url = lastCallAudio.value;
        if (lastCallAudioPlayer.value[0]) {
            lastCallAudioPlayer.value[0].src = url;
            lastCallAudioPlayer.value[0].currentTime = 0;
        }

    }
});



</script>

<template>
    <div v-show="props.show" class="border-zinc-700 tw-p-2 tw-my-2">
        <span class='tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4'>
            Chamadas Recentes
        </span>
        <div v-show="callHistory && callHistory?.length > 0"
            class="tw-w-full tw-flex tw-flex-row tw-gap-1 tw-min-w-[350px] tw-justify-center tw-items-center">
            <button type="button"
                class="hover:tw-outline-blue-500 hover:tw-outline tw-outline-none tw-rounded-md active:tw-bg-zinc-800 tw-transition-colors tw-bg-transparent"
                @click="() => currentPage = currentPage <= 1 ? maxPages : currentPage - 1">
                <PhArrowCircleLeft :size="24" />
            </button>
            <input type="number" autocomplete="off"
                class="w-[52px] hover:tw-outline-blue-500 hover:tw-outline tw-outline-none tw-rounded-md tw-bg-zinc-800 tw-text-center tw-appearance-none"
                placeholder="1" @keyup="handlePageChange" :value="currentPage" />
            <span class="tw-text-xl tw-font-bold">/</span>
            <input type="text" autocomplete="off"
                class="w-[52px] tw-font-bold hover:tw-outline-blue-500 hover:tw-outline tw-outline-none tw-rounded-md tw-bg-zinc-800 focus:tw-bg-zinc-800 active:tw-bg-zinc-800 tw-text-center tw-italic"
                v-model="maxPages" disabled />
            <button
                class="hover:tw-outline-blue-500 hover:tw-outline tw-outline-none tw-rounded-md active:tw-bg-zinc-800 tw-transition-colors tw-bg-transparent"
                type="button" @click="() => currentPage = currentPage >= maxPages ? 1 : currentPage + 1">
                <PhArrowCircleRight :size="24" />
            </button>

        </div>


        <div class='tw-my-4 tw-w-full tw-flex tw-flex-col tw-gap-2 tw-min-w-[425px] tw-rounded-lg'>
            <ul
                class="scroll-smooth tw-text-zinc-200 tw-p-4 tw-max-h-[250px] tw-overflow-scroll tw-overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
                <span v-show="callHistory && callHistory.length <= 0" class="tw-italic tw-w-full tw-text-center"> Nenhuma
                    chamada
                </span>
                <span v-show="callHistory && callHistory.length > 0 && currentPage === 1"
                    class="tw-flex tw-flex-row tw-items-center tw-justify-start">Última chamada
                    <PhArrowBendRightDown :size="20" />
                </span>
                <li class="tw-w-full tw-mb-1 tw-flex tw-flex-col tw-justify-between tw-items-center tw-p-2 hover:tw-outline-blue-500 hover:tw-outline tw-outline-none tw-rounded-md tw-bg-zinc-800 tw-group"
                    v-for="(call, index) in callHistory" :key="call.date.toLocaleString()"
                    :class="{ 'tw-border-b-2': index === 0 && currentPage === 1 && call.duration !== '00:00:00' }">
                    <div class="tw-flex tw-flex-row tw-justify-between tw-items-start tw-w-full">
                        <span class="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-1"
                            :class="{ 'tw-text-red-400': call.duration === '00:00:00' }">
                            <component
                                :is="call.callDirection ? (call.callDirection === 'incoming' ? PhPhoneIncoming : PhPhoneOutgoing) : PhPhoneCall"
                                :size="20" /> {{ call.number }} <span class="tw-italic tw-text-zinc-500">{{
                                    call.duration
                                }}</span>
                        </span>
                        <span class="tw-text-zinc-400">
                            {{ handleDate(call.date) }}
                        </span>
                    </div>
                    <span v-if="index === 0 && lastCallAudio && currentPage === 1 && call.duration !== '00:00:00'"
                        class="tw-rounded-md tw-max-h-0 tw-truncate group-hover:tw-max-h-14 tw-transition-all tw-duration-250 tw-ease-in tw-overflow-hidden">
                        <audio id="lastCallAudioPlayer" ref="lastCallAudioPlayer" class="tw-rounded-md tw-h-8"
                            style="background: transparent;" controls>
                            <source type="audio/webm">
                            Your browser does not support the audio element.
                        </audio>
                    </span>
                </li>
            </ul>

        </div>
    </div>
</template>
<style>
.scrollbar-thin {
    scrollbar-width: auto;
}

.appearance-none {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: textfield;
}
</style>
