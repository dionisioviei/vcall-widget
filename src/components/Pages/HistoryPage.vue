<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import { PhPhoneCall, PhArrowCircleLeft, PhArrowCircleRight } from "@phosphor-icons/vue";
import { getCallHistory } from '../../store/callHistory';

const callHistory = ref<null | Array<{
    number: string;
    duration: string;
    date: string;
}>>(null);
const maxPages = ref(0);
const currentPage = ref(1);
const perPage = ref(20);

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

</script>

<template>
    <div v-show="props.show" class="border-zinc-700 p-2 my-2">
        <span class='text-xl leading-6 flex items-center gap-2 my-4'>
            Chamadas Recentes
        </span>
        <div v-show="callHistory && callHistory?.length > 0"
            class="w-full flex flex-row gap-1 min-w-[350px] justify-center items-center">
            <button type="button"
                class="hover:outline-blue-500 hover:outline outline-none rounded-md active:bg-zinc-800 transition-colors"
                @click="() => currentPage = currentPage <= 1 ? maxPages : currentPage - 1">
                <PhArrowCircleLeft :size="24" />
            </button>
            <input type="number"
                class="w-[52px] hover:outline-blue-500 hover:outline outline-none rounded-md bg-zinc-800 text-center appearance-none"
                placeholder="1" @keyup="handlePageChange" :value="currentPage" />
            <span class="text-xl font-bold">/</span>
            <input type="text"
                class="w-[52px] font-bold hover:outline-blue-500 hover:outline outline-none rounded-md bg-zinc-800 text-center italic"
                v-model="maxPages" disabled />
            <button
                class="hover:outline-blue-500 hover:outline outline-none rounded-md active:bg-zinc-800 transition-colors"
                type="button" @click="() => currentPage = currentPage >= maxPages ? 1 : currentPage + 1">
                <PhArrowCircleRight :size="24" />
            </button>

        </div>


        <div class='my-4 w-full flex flex-col gap-2 min-w-[425px] rounded-lg'>
            <ul
                class="scroll-smooth text-zinc-200 p-4 max-h-[250px] overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
                <span v-show="callHistory && callHistory.length <= 0" class="italic w-full text-center"> Nenhuma chamada
                </span>
                <li class="w-full mb-1 flex flex-row justify-between items-center p-2 hover:outline-blue-500 hover:outline outline-none rounded-md bg-zinc-800"
                    v-for="call in callHistory" :key="call.date.toLocaleString()">
                    <span class="flex flex-row justify-center items-center gap-1">
                        <PhPhoneCall :size="20" /> {{ call.number }} <span class="italic text-zinc-500">{{
                            call.duration
                        }}</span>
                    </span> <span class="text-zinc-400">
                        {{ handleDate(call.date) }}</span>
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
