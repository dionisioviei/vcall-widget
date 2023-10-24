<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { PhPhone } from "@phosphor-icons/vue"
import MenuPage from './Pages/MenuPage.vue'
import { formatTime } from '../utils/formatTime'
import { useWebphoneStore } from '../store/useWebphoneStore'
import { watchEffect } from 'vue'

const webphoneStore = useWebphoneStore()

watchEffect(() => {
console.log('webphoneStore.inCallStatus.hangupReason |>', webphoneStore.inCallStatus.hangupReason)
});

</script>

<template>
  <Popover class='tw-z-[999] tw-absolute tw-bottom-4 tw-right-4 md:tw-bottom-8 md:tw-right-8 tw-flex tw-flex-col tw-items-end'>

    <transition enter-active-class="tw-transition tw-duration-100 tw-ease-out" enter-from-class="tw-translate-y-1 tw-opacity-0"
      enter-to-class="tw-translate-y-0 tw-opacity-100" leave-active-class="tw-transition tw-duration-100 tw-ease-in"
      leave-from-class="tw-translate-y-0 tw-opacity-100" leave-to-class="tw-translate-y-1 tw-opacity-0">
      <PopoverPanel :static="webphoneStore.isStatic">
        <MenuPage :agentStatus="webphoneStore.agentStatus" :register="webphoneStore.register" :unregister="webphoneStore.unregister" :answer="webphoneStore.answer"
          :hangup="webphoneStore.hangup" :inCallStatus="webphoneStore.inCallStatus" :sendDTMF="webphoneStore.sendDTMF" :startCall="webphoneStore.startCall"
          :toggleHold="webphoneStore.toggleHold" :callDuration="webphoneStore.callDuration" :toggleMute="webphoneStore.toggleMute" :extenStatus="webphoneStore.extenStatus" />
      </PopoverPanel>
    </transition>

    <PopoverButton title='FeedBack' aria-label='FeedBack' id="popoverbutton"
      class='tw-bg-blue-500 tw-rounded-full tw-px-2 tw-h-14 tw-min-w-[3.5rem] tw-place-content-center tw-text-white tw-flex tw-items-center tw-group tw-shadow-[0_0.5rem_1.5rem_#8257e540]'
      :class="{ 'tw-animate-pulse tw-bg-orange-500': ['Recebendo chamada', 'Em chamada'].includes(webphoneStore.agentStatus), 'tw-bg-orange-500': ['Registro falhou', 'Desconectado'].includes(webphoneStore.agentStatus) }">
      <ph-phone :size="32" style="fill: white" />

      <span
        class='tw-max-w-0 tw-truncate group-hover:tw-max-w-xl tw-transition-all tw-duration-500 tw-ease-in-out tw-text-clip tw-overflow-hidden'
        :class="{ 'tw-max-w-xl': ['Recebendo chamada', 'Em chamada'].includes(webphoneStore.agentStatus) }">
        <span class='tw-pl-2' />
        {{ webphoneStore.agentStatus === 'Em chamada' ? `Em chamada ${formatTime(webphoneStore.callDuration || 0)} ` :
          (['Recebendo chamada'].includes(webphoneStore.agentStatus) ? 'Recebendo chamada' : 'Fazer uma ligação') }}
      </span>
      <!-- <audio ref="localStream" id="localStream" autoplay playsinline muted v-show="false"></audio>
      <audio ref="remoteStream" id="remoteStream" autoplay playsinline v-show="false"></audio> -->
    </PopoverButton>
  </Popover>
</template>
