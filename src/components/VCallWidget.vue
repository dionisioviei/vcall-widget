<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { PhPhone } from "@phosphor-icons/vue";
import MenuPage from './Pages/MenuPage.vue';
import { useWebphone } from "@vittelgroup/vwebphone";
import { getCredentials } from '../store/credentials';
import { computed, onUnmounted, ref, watch, watchEffect } from 'vue';
import { formatTime } from '../utils/formatTime';
import { playCallingSound, playIncomingCallSound } from '../utils/playCallSounds';
const { authuser, secret, domain, port, transport, name } = getCredentials();

const localStream = ref<HTMLMediaElement | null>(null);
const remoteStream = ref<HTMLMediaElement | null>(null);
const callDuration = ref<null | number>(null);
const callDurationTimer = ref<null | number>(null);
const open = ref(false);

const alertCallAudio = ref<null | HTMLAudioElement>(null);

const {
  janusStatus,
  register,
  unregister,
  answer,
  error,
  extenStatus,
  hangup,
  inCallStatus,
  isOnline,
  registerStatus,
  sendDTMF,
  startCall,
  toggleHold,
  toggleMute
} = useWebphone({
  janusEndpoint: '/janus',
  janusPort: 8189,
  janusProtocol: 'wss',
  janusServer: 'agent.vcmpbx.com.br',
  localStreamElement: localStream,
  remoteStreamElement: remoteStream,
  debug: 'all'
});

watch(janusStatus, () => {
  console.warn({ janusStatus: janusStatus.value })
  if (authuser && secret && domain && janusStatus.value === 'connected') {
    register({
      authuser,
      secret,
      port,
      domain,
      transport,
      name: name || authuser
    });
  }
});

const agentStatus = computed(() => {
  switch (registerStatus.value) {
    case 'registered':
      if (extenStatus.value === 'idle') {
        return 'Conectado';
      }
      if (['incall', 'calling'].includes(extenStatus.value)) {
        return 'Em chamada';
      }
      if (extenStatus.value === 'incomingcall') {
        return 'Recebendo chamada';
      }
      return 'Conectado';
    case 'unregistered':
      return 'Desconectado';
    case 'registering':
      return 'Conectando...';
    case 'unregistering':
      return 'Desconectando';
    case 'registration_failed':
      return 'Registro falhou';
    default:
      return 'Desconectado';
  }
});

function startTimer() {
  if (inCallStatus.value.inCall) {
    callDurationTimer.value = setTimeout(() => {
      callDuration.value = (callDuration.value || 0) + 1;
      startTimer();
    }, 1000);
  } else {
    callDuration.value = null;
  }
}

watchEffect(() => {
  startTimer();
});

watchEffect(() => {
  if (!alertCallAudio.value && extenStatus.value === 'incomingcall') {
    alertCallAudio.value = playIncomingCallSound();
  }

  if (agentStatus.value === 'Em chamada' && extenStatus.value === 'incall' && alertCallAudio.value) {
    alertCallAudio.value.pause();
    alertCallAudio.value = null;
  }
});

watchEffect(() => {
  if (agentStatus.value === 'Em chamada' && !alertCallAudio.value && extenStatus.value === 'calling') {
    alertCallAudio.value = playCallingSound();
  }

  if (agentStatus.value === 'Em chamada' && alertCallAudio.value && extenStatus.value === 'incall') {
    alertCallAudio.value.pause();
    alertCallAudio.value = null;
  }
});

onUnmounted(() => {
  callDurationTimer.value && clearTimeout(callDurationTimer.value);
});
</script>

<template>
  <Popover class='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end' v-slot="{ open }">

    <PopoverPanel static>
      <div v-if="open">
        <MenuPage :agentStatus="agentStatus" :register="register" :unregister="unregister" :answer="answer"
          :hangup="hangup" :inCallStatus="inCallStatus" :sendDTMF="sendDTMF" :startCall="startCall"
          :toggleHold="toggleHold" :callDuration="callDuration" :toggleMute="toggleMute" />
      </div>
    </PopoverPanel>

    <PopoverButton title='FeedBack' aria-label='FeedBack'
      class='bg-blue-500 rounded-full px-3 h-12 text-white flex items-center group shadow-[0_0.5rem_1.5rem_#8257e540]'
      :class="{ 'animate-pulse bg-orange-500': ['Recebendo chamada', 'Em chamada'].includes(agentStatus) }">
      <ph-phone :size="32" />

      <span
        class='max-w-0 truncate group-hover:max-w-xl transition-all duration-500 ease-linear text-clip overflow-hidden'
        :class="{ 'max-w-xl': ['Recebendo chamada'].includes(agentStatus) }">
        <span class='pl-2' />
        {{ agentStatus === 'Em chamada' ? `Em chamada ${formatTime(callDuration || 0)}` :
          (['Recebendo chamada'].includes(agentStatus) ? 'Recebendo chamada' : 'Fazer uma ligação') }}
      </span>
      <audio ref="localStream" autoplay playsinline muted v-show="false"></audio>
      <audio ref="remoteStream" autoplay playsinline v-show="false"></audio>
    </PopoverButton>
  </Popover>
</template>
