<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue'
import {
  PhPhoneCall,
  PhArrowCircleLeft,
  PhArrowCircleRight,
  PhArrowBendRightDown,
  PhPhoneIncoming,
  PhPhoneOutgoing
} from '@phosphor-icons/vue'
import { getCallHistory, getLastCallRecording } from '../../store/callHistory'

const callHistory = ref<null | Array<{
  number: string
  duration: string
  date: string
  callDirection: string | null
  displayName?: string
}>>(null)
const maxPages = ref(0)
const currentPage = ref(1)
const perPage = ref(20)
const lastCallAudio = ref<string | null>(null)
const lastCallAudioPlayer = ref<null | HTMLAudioElement[]>(null)

const props = defineProps<{
  show: boolean
  colorScheme?: 'light' | 'dark'
}>()

onMounted(() => {
  const { history, totalPages } = getCallHistory(currentPage.value, perPage.value)
  callHistory.value = history
  maxPages.value = totalPages
})

watch(props, () => {
  if (props.show) {
    const { history, totalPages } = getCallHistory(currentPage.value, perPage.value)
    callHistory.value = history
    maxPages.value = totalPages
    lastCallAudio.value = getLastCallRecording()
  } else {
    if (lastCallAudioPlayer.value && lastCallAudioPlayer.value[0]) {
      lastCallAudioPlayer.value[0].pause()
    }
  }
})

function handleDate(date: string) {
  if (new Date().toLocaleString().split(',')[0] === new Date(date).toLocaleString().split(',')[0]) {
    return `hoje ás ${new Date(date).toLocaleString().split(',')[1]}`
  }
  return new Date(date).toLocaleString().replace(',', ' ás')
}

function handlePageChange(el: any) {
  if (el.target.value === '' || isNaN(parseInt(el.target.value))) {
    return
  }
  if (parseInt(el.target.value) > maxPages.value || parseInt(el.target.value) <= 0) {
    return
  }
  currentPage.value = el.target.value ? el.target.value : '1'
  return
}

watchEffect(() => {
  if (currentPage.value <= maxPages.value && currentPage.value > 0) {
    const { history, totalPages } = getCallHistory(currentPage.value, perPage.value)
    callHistory.value = history
    maxPages.value = totalPages
  }
})

watchEffect(() => {
  if (lastCallAudioPlayer.value && lastCallAudio.value && currentPage.value === 1) {
    const url = lastCallAudio.value
    if (lastCallAudioPlayer.value[0]) {
      lastCallAudioPlayer.value[0].src = url
      lastCallAudioPlayer.value[0].currentTime = 0
    }
  }
})
</script>

<template>
  <div
    v-show="props.show"
    class="tw-p-2 tw-my-2 tw-transition-colors"
    :class="{
      'tw-border-zinc-700': colorScheme === 'dark',
      'tw-border-gray-300': colorScheme === 'light'
    }"
  >
    <span
      class="tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4 tw-transition-colors"
      :class="{
        'tw-text-white': colorScheme === 'dark',
        'tw-text-gray-900': colorScheme === 'light'
      }"
    >
      Chamadas Recentes
    </span>
    <div
      v-show="callHistory && callHistory?.length > 0"
      class="tw-w-full tw-flex tw-flex-row tw-gap-1 tw-min-w-[350px] tw-justify-center tw-items-center"
    >
      <button
        type="button"
        class="tw-outline-none tw-rounded-md tw-transition-colors tw-bg-transparent"
        :class="{
          'hover:tw-outline-primary active:tw-bg-primary-800 tw-text-white': colorScheme === 'dark',
          'hover:tw-outline-blue-500 active:tw-bg-gray-200 tw-text-gray-900':
            colorScheme === 'light'
        }"
        @click="() => (currentPage = currentPage <= 1 ? maxPages : currentPage - 1)"
      >
        <PhArrowCircleLeft :size="24" />
      </button>
      <input
        type="number"
        autocomplete="off"
        class="w-[52px] hover:tw-outline tw-outline-none tw-rounded-md tw-text-center tw-appearance-none tw-transition-colors"
        :class="{
          'hover:tw-outline-primary tw-bg-primary-800 tw-text-white': colorScheme === 'dark',
          'hover:tw-outline-blue-500 tw-bg-gray-100 tw-text-gray-900': colorScheme === 'light'
        }"
        placeholder="1"
        @keyup="handlePageChange"
        :value="currentPage"
      />
      <span
        class="tw-text-xl tw-font-bold tw-transition-colors"
        :class="{
          'tw-text-white': colorScheme === 'dark',
          'tw-text-gray-900': colorScheme === 'light'
        }"
        >/</span
      >
      <input
        type="text"
        autocomplete="off"
        class="w-[52px] tw-font-bold hover:tw-outline tw-outline-none tw-rounded-md tw-text-center tw-italic tw-transition-colors"
        :class="{
          'hover:tw-outline-primary tw-bg-primary-800 focus:tw-bg-primary-800 active:tw-bg-primary-800 tw-text-white':
            colorScheme === 'dark',
          'hover:tw-outline-blue-500 tw-bg-gray-100 focus:tw-bg-gray-100 active:tw-bg-gray-100 tw-text-gray-900':
            colorScheme === 'light'
        }"
        v-model="maxPages"
        disabled
      />
      <button
        class="tw-outline-none tw-rounded-md tw-transition-colors tw-bg-transparent"
        :class="{
          'hover:tw-outline-primary active:tw-bg-primary-800 tw-text-white': colorScheme === 'dark',
          'hover:tw-outline-blue-500 active:tw-bg-gray-200 tw-text-gray-900':
            colorScheme === 'light'
        }"
        type="button"
        @click="() => (currentPage = currentPage >= maxPages ? 1 : currentPage + 1)"
      >
        <PhArrowCircleRight :size="24" />
      </button>
    </div>

    <div class="tw-my-4 tw-w-full tw-flex tw-flex-col tw-gap-2 tw-min-w-[425px] tw-rounded-lg">
      <ul
        class="scroll-smooth tw-p-4 tw-max-h-[250px] tw-overflow-scroll tw-overflow-x-hidden scrollbar-track-transparent scrollbar-thin tw-transition-colors"
        :class="{
          'tw-text-zinc-200 scrollbar-thumb-zinc-700': colorScheme === 'dark',
          'tw-text-gray-700 scrollbar-thumb-gray-400': colorScheme === 'light'
        }"
      >
        <span
          v-show="callHistory && callHistory.length <= 0"
          class="tw-italic tw-w-full tw-text-center tw-transition-colors"
          :class="{
            'tw-text-zinc-300': colorScheme === 'dark',
            'tw-text-gray-600': colorScheme === 'light'
          }"
        >
          Nenhuma chamada
        </span>
        <span
          v-show="callHistory && callHistory.length > 0 && currentPage === 1"
          class="tw-flex tw-flex-row tw-items-center tw-justify-start tw-transition-colors"
          :class="{
            'tw-text-white': colorScheme === 'dark',
            'tw-text-gray-900': colorScheme === 'light'
          }"
          >Última chamada
          <PhArrowBendRightDown :size="20" />
        </span>
        <li
          class="tw-w-full tw-mb-1 tw-flex tw-flex-col tw-justify-between tw-items-center tw-p-2 hover:tw-outline tw-outline-none tw-rounded-md tw-group tw-transition-colors"
          :class="{
            'tw-bg-primary-800 hover:tw-outline-primary': colorScheme === 'dark',
            'tw-bg-gray-100 hover:tw-outline-blue-500': colorScheme === 'light',
            'tw-border-b-2': index === 0 && currentPage === 1 && call.duration !== '00:00:00'
          }"
          v-for="(call, index) in callHistory"
          :key="call.date.toLocaleString()"
        >
          <div class="tw-flex tw-flex-row tw-justify-between tw-items-start tw-w-full">
            <span
              class="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-1"
              :class="{ 'tw-text-red-400': call.duration === '00:00:00' }"
            >
              <component
                :is="
                  call.callDirection
                    ? call.callDirection === 'incoming'
                      ? PhPhoneIncoming
                      : PhPhoneOutgoing
                    : PhPhoneCall
                "
                :size="20"
              />{{ call.displayName ? `(${call.displayName}) ` : '' }}{{ call.number }}
              <span
                class="tw-italic tw-transition-colors"
                :class="{
                  'tw-text-zinc-500': colorScheme === 'dark',
                  'tw-text-gray-500': colorScheme === 'light'
                }"
                >{{ call.duration }}</span
              >
            </span>
            <span
              class="tw-transition-colors"
              :class="{
                'tw-text-zinc-400': colorScheme === 'dark',
                'tw-text-gray-500': colorScheme === 'light'
              }"
            >
              {{ handleDate(call.date) }}
            </span>
          </div>
          <span
            v-if="index === 0 && lastCallAudio && currentPage === 1 && call.duration !== '00:00:00'"
            class="tw-rounded-md tw-max-h-0 tw-truncate group-hover:tw-max-h-14 tw-transition-all tw-duration-250 tw-ease-in tw-overflow-hidden"
          >
            <audio
              id="lastCallAudioPlayer"
              ref="lastCallAudioPlayer"
              class="tw-rounded-md tw-h-8"
              style="background: transparent"
              controls
            >
              <source type="audio/webm" />
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
