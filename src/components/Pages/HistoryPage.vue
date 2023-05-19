<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { PhPhoneCall } from "@phosphor-icons/vue";
import { getCallHistory } from '../../store/callHistory';

const callHistory = ref<null | Array<{
    number: string;
    duration: string;
    date: string;
}>>(null);

const props = defineProps<{ show: boolean; }>()

onMounted(() => {
    callHistory.value = getCallHistory();
});

watch(props, () => {
    if (props.show) {
        callHistory.value = getCallHistory();
    }
});

function handleDate(date: string) {
    if (new Date().toLocaleString().split(',')[0] === new Date(date).toLocaleString().split(',')[0]) {
        return `hoje ás ${new Date(date).toLocaleString().split(',')[1]}`;
    }
    return new Date(date).toLocaleString().replace(',', ' ás');
}

</script>

<template>
    <div v-show="props.show" class="border-zinc-700 p-2 my-2">
        <span class='text-xl leading-6 flex items-center gap-2 my-4'>
            Chamadas Recentes
        </span>

        <div class='my-4 w-full flex flex-col gap-2 min-w-[350px] rounded-lg'>
            <ul class=" text-zinc-200 p-4 rounded-md max-h-[250px] overflow-scroll">
                <li class="w-full mb-1 flex flex-row justify-between items-center gap-2 p-2 hover:outline-zinc-500 hover:outline outline-none rounded-md bg-zinc-800"
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
