<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { PhPhone, PhPhoneX } from '@phosphor-icons/vue'
import MenuPage from './Pages/MenuPage.vue'
import { formatTime } from '../utils/formatTime'
import { useWebphoneStore } from '../store/useWebphoneStore'
import { onMounted, onUnmounted, ref } from 'vue'
import { formatPhoneNumberToCall } from '../utils/formatPhoneNumberToCall'
import { useColorScheme } from '../utils/useColorScheme'

const webphoneStore = useWebphoneStore()
const click2CallTimer = ref(0)
const click2CallRecentlyCalled = ref(false)
const buttonPosition = ref<'top' | 'bottom'>(
  (localStorage.getItem('@vcallwidget:buttonPosition') as 'top' | 'bottom') || 'bottom'
)
const { colorScheme, toggleColorScheme } = useColorScheme()

function toggleButtonPosition() {
  buttonPosition.value = buttonPosition.value === 'bottom' ? 'top' : 'bottom'
  localStorage.setItem('@vcallwidget:buttonPosition', buttonPosition.value)
}

function click2Call(event: MouseEvent) {
  let traverseCounter = 0
  let target = event.target
  // Traverse up the DOM tree to find the nearest ancestor with an href attribute (limiting at 8 to avoid infinite loops)
  while (target !== document && target && traverseCounter < 8) {
    traverseCounter++
    if (
      target instanceof Element &&
      target.hasAttribute('href') &&
      target.getAttribute('href')?.includes('tel:')
    ) {
      event.preventDefault()
      if (webphoneStore.agentStatus !== 'Conectado') {
        return
      }
      const phoneNumber = target.getAttribute('href')?.replace('tel:', '')
      if (!phoneNumber) return

      if (click2CallRecentlyCalled.value) return

      click2CallRecentlyCalled.value = true
      click2CallTimer.value = window.setTimeout(() => {
        click2CallRecentlyCalled.value = false
      }, 2500)

      webphoneStore.startCall(formatPhoneNumberToCall(phoneNumber))
      return // Stop the loop once the href attribute is found
    }
    target = (target as Element)?.parentNode
  }
}

onMounted(() => {
  document.addEventListener('click', click2Call)
  localStorage.removeItem('@vcallwidget:lastCallRecorded')
})
onUnmounted(() => {
  document.removeEventListener('click', click2Call)
  click2CallTimer.value && clearTimeout(click2CallTimer.value)
})
</script>

<template>
  <Popover
    class="tw-z-[49] tw-fixed tw-left-[53%] tw--translate-x-1/2 tw-flex tw-items-center"
    :class="{
      'tw-bottom-4': buttonPosition === 'bottom',
      'tw-top-4': buttonPosition === 'top'
    }"
  >
    <PopoverButton
      title="FeedBack"
      aria-label="FeedBack"
      id="popoverbutton"
      class="tw-rounded-xl tw-text-sm tw-px-2 tw-h-12 tw-min-w-[3.5rem] tw-place-content-center tw-font-bold tw-flex tw-items-center tw-group tw-transition-colors"
      :class="{
        'tw-animate-pulse  tw-border-blue-600 tw-text-white': [
          'Recebendo chamada',
          'Em chamada'
        ].includes(webphoneStore.agentStatus),
        'tw-bg-primary tw-border-gray-700 tw-text-[#b0b4ba] tw-border-4 tw-border-solid':
          colorScheme === 'dark',
        'tw-bg-white tw-border-gray-200 tw-text-gray-700 tw-border-4 tw-border-solid':
          colorScheme === 'light'
      }"
    >
      <PhPhoneX
        v-show="['Registro falhou', 'Desconectado'].includes(webphoneStore.agentStatus)"
        :size="24"
        :style="{ fill: colorScheme === 'dark' ? '#b0b4ba' : '#374151' }"
      />
      <PhPhone
        v-show="!['Registro falhou', 'Desconectado'].includes(webphoneStore.agentStatus)"
        :size="24"
        :style="{ fill: colorScheme === 'dark' ? '#b0b4ba' : '#374151' }"
      />
      <span
        class="tw-max-w-xl tw-transition-all tw-duration-500 tw-ease-in-out"
        :class="{
          'tw-max-w-xl': ['Recebendo chamada', 'Em chamada'].includes(webphoneStore.agentStatus)
        }"
      >
        <span class="tw-pl-2" />
        {{
          webphoneStore.agentStatus === 'Em chamada'
            ? `Em chamada ${formatTime(webphoneStore.callDuration || 0)} `
            : ['Recebendo chamada'].includes(webphoneStore.agentStatus)
            ? 'Recebendo chamada'
            : ['Registro falhou', 'Desconectado'].includes(webphoneStore.agentStatus)
            ? 'Desconectado'
            : 'Fazer uma ligação'
        }}
      </span>
      <!-- <audio ref="localStream" id="localStream" autoplay playsinline muted v-show="false"></audio>
      <audio ref="remoteStream" id="remoteStream" autoplay playsinline v-show="false"></audio> -->
    </PopoverButton>

    <transition
      enter-active-class="tw-transition tw-duration-100 tw-ease-out"
      enter-from-class="tw-translate-x-1 tw-opacity-0"
      enter-to-class="tw-translate-x-0 tw-opacity-100"
      leave-active-class="tw-transition tw-duration-100 tw-ease-in"
      leave-from-class="tw-translate-x-0 tw-opacity-100"
      leave-to-class="tw-translate-x-1 tw-opacity-0"
    >
      <PopoverPanel
        :static="webphoneStore.isStatic"
        class="tw-absolute"
        :class="{
          'tw-bottom-14': buttonPosition === 'bottom',
          'tw-top-14': buttonPosition === 'top'
        }"
      >
        <MenuPage
          :agentStatus="webphoneStore.agentStatus"
          :register="webphoneStore.register"
          :unregister="webphoneStore.unregister"
          :answer="webphoneStore.answer"
          :hangup="webphoneStore.hangup"
          :inCallStatus="webphoneStore.inCallStatus"
          :sendDTMF="webphoneStore.sendDTMF"
          :startCall="webphoneStore.startCall"
          :toggleHold="webphoneStore.toggleHold"
          :callDuration="webphoneStore.callDuration"
          :toggleMute="webphoneStore.toggleMute"
          :extenStatus="webphoneStore.extenStatus"
          :toggleButtonPosition="toggleButtonPosition"
          :buttonPosition="buttonPosition"
          :colorScheme="colorScheme"
          :toggleColorScheme="toggleColorScheme"
        />
      </PopoverPanel>
    </transition>
  </Popover>
</template>
