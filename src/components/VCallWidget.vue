<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { PhPhone } from "@phosphor-icons/vue";
import MenuPage from './Pages/MenuPage.vue';
import { useWebphone } from "@vittelgroup/vwebphone";
import { getCredentials } from '../store/credentials';
import { setLastCallRecording, setCallHistory } from '../store/callHistory';
import { computed, onMounted, onUnmounted, ref, watch, watchEffect, onBeforeUnmount } from 'vue';
import { formatTime } from '../utils/formatTime';
import { useNotification } from '../utils/useNotification';

import { playCallingSound, playIncomingCallSound } from '../utils/playCallSounds';
import IncomingCallIcon from '../assets/incomingcallIcon';
const { authuser, secret, domain, port, transport, name } = getCredentials();

const localStream = ref<HTMLMediaElement | null>(null);
const remoteStream = ref<HTMLMediaElement | null>(null);
const callDuration = ref<null | number>(null);
const callDurationTimer = ref<null | number>(null);
const isStatic = ref(false);
const mediaRecorder = ref<null | MediaRecorder>(null);
const recordedChunks = ref<Blob[]>([]);

// Handle call history
const lastCallDuration = ref<null | number>(null);
const lastNumberTalked = ref<null | string>(null);
const lastCallDate = ref<null | Date>(null);
const lastCallDirection = ref<"incoming" | "outgoing" | null>(null);

const [isGranted, sendNotification] = useNotification();

const alertCallAudio = ref<null | HTMLAudioElement>(null);
const alertIncomingCallAudio = ref<null | HTMLAudioElement>(null);

const {
  janusStatus,
  register,
  unregister,
  answer,
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
  debug: 'minimal',
  registerTimeout: 5,
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


watchEffect(() => {
  if (['Em chamada', 'Recebendo chamada'].includes(agentStatus.value) && lastNumberTalked.value === null && inCallStatus.value.status) {
    lastNumberTalked.value = inCallStatus.value.status.number;
    lastCallDate.value = new Date();
    lastCallDirection.value = inCallStatus.value.status.callDirection;
    lastCallDuration.value = 0;
  }
});

watchEffect(() => {
  if (callDuration.value) {
    lastCallDuration.value = callDuration.value;
  }
});

watchEffect(() => {
  if (!['Em chamada', 'Recebendo chamada'].includes(agentStatus.value) && lastNumberTalked.value && lastCallDuration.value !== null && lastCallDate.value && lastCallDirection.value) {
    setCallHistory({
      number: lastNumberTalked.value,
      date: lastCallDate.value,
      duration: formatTime(lastCallDuration.value),
      callDirection: lastCallDirection.value
    });
    lastNumberTalked.value = null;
    lastCallDate.value = null;
    lastCallDuration.value = null;
    lastCallDirection.value = null;
  }
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

function startTimer() {
  if (inCallStatus.value.inCall && extenStatus.value === 'incall') {
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
  if (janusStatus.value === 'error') {
    sendNotification({
      title: 'Webphone OFFLINE!', options: {
        vibrate: 150,
        body: `Webphone perdeu conexão com o WSS.`,
        requireInteraction: true,
        icon: IncomingCallIcon,
      }
    })
  }
});

watchEffect(() => {
  if (alertIncomingCallAudio.value === null && extenStatus.value === 'incomingcall') {
    isStatic.value = true;
    openPopover();
    alertIncomingCallAudio.value = playIncomingCallSound();
    if (isGranted && document.visibilityState === "hidden") {
      sendNotification({
        title: 'Nova Chamada', options: {
          vibrate: 150,
          body: `Recebendo chamada de ${inCallStatus.value.status?.number}`,
          requireInteraction: true,
          icon: IncomingCallIcon,
        }
      })
    }
  }

  if (extenStatus.value === 'incall' && alertIncomingCallAudio.value) {
    alertIncomingCallAudio.value.pause();
    alertIncomingCallAudio.value = null;
    isStatic.value = false;
    openPopover();
    mediaRecorder.value?.start();
  }

  if (extenStatus.value !== 'incomingcall' && alertIncomingCallAudio.value) {
    alertIncomingCallAudio.value.pause();
    alertIncomingCallAudio.value = null;
    isStatic.value = false;
  }
  if (extenStatus.value === 'idle') {
    mediaRecorder.value?.stop();
    mediaRecorder.value === null;
  }
});

watchEffect(() => {
  if (alertCallAudio.value === null && extenStatus.value === 'calling') {
    alertCallAudio.value = playCallingSound();
  }

  if (alertCallAudio.value && extenStatus.value === 'incall') {
    mediaRecorder.value?.start();
  }

  if (extenStatus.value === 'idle') {
    mediaRecorder.value?.stop();
    mediaRecorder.value === null;

  }
});

watchEffect(() => {
  if (extenStatus.value !== 'calling' && alertCallAudio.value) {
    setTimeout(() => {
      alertCallAudio.value?.pause();
      alertCallAudio.value = null;
    }, 100);
  }

  if (alertCallAudio.value && extenStatus.value === 'incall') {
    alertCallAudio.value.pause();
    alertCallAudio.value = null;
  }
})

watchEffect(() => {
  if (localStream.value && remoteStream.value && mediaRecorder.value === null) {
    const audioContext = new AudioContext();

    const localMediaStreamSource = audioContext.createMediaElementSource(localStream.value);
    const remoteMediaStreamSource = audioContext.createMediaElementSource(remoteStream.value);

    const destination = audioContext.createMediaStreamDestination();
    localMediaStreamSource.connect(destination);
    remoteMediaStreamSource.connect(destination);

    const recordedStream = new MediaStream()
    recordedStream.addTrack(destination.stream.getAudioTracks()[0]);

    mediaRecorder.value = new MediaRecorder(recordedStream);
    mediaRecorder.value.ondataavailable = (event) => {
      recordedChunks.value.push(event.data);
    };

    mediaRecorder.value.onstop = () => {
      const recordedBlob = new Blob(recordedChunks.value, { type: 'audio/webm' });
      recordedChunks.value = [];
      setLastCallRecording(recordedBlob);

    };
  }
});

function openPopover() {
  const popoverEl = document.querySelector('div[data-headlessui-state]');
  const popoverBtnEl = document.getElementById('popoverbutton');
  if (popoverEl && popoverBtnEl) {
    const stateValue = popoverEl.getAttribute('data-headlessui-state');
    if (stateValue === '') {
      popoverBtnEl.click();
    }

  }
}

// function autoUnregister() {
//   console.warn('UNREGISTERING');
//   unregister();
// }

// onMounted(() => {
//   window.addEventListener('beforeunload', autoUnregister);
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('beforeunload', autoUnregister);
// });

onUnmounted(() => {
  callDurationTimer.value && clearTimeout(callDurationTimer.value);
});

</script>

<template>
  <Popover class='tw-z-[999] tw-absolute tw-bottom-4 tw-right-4 md:tw-bottom-8 md:tw-right-8 tw-flex tw-flex-col tw-items-end'>

    <transition enter-active-class="tw-transition tw-duration-100 tw-ease-out" enter-from-class="tw-translate-y-1 tw-opacity-0"
      enter-to-class="tw-translate-y-0 tw-opacity-100" leave-active-class="tw-transition tw-duration-100 tw-ease-in"
      leave-from-class="tw-translate-y-0 tw-opacity-100" leave-to-class="tw-translate-y-1 tw-opacity-0">
      <PopoverPanel :tw-static="isStatic">
        <MenuPage :agentStatus="agentStatus" :register="register" :unregister="unregister" :answer="answer"
          :hangup="hangup" :inCallStatus="inCallStatus" :sendDTMF="sendDTMF" :startCall="startCall"
          :toggleHold="toggleHold" :callDuration="callDuration" :toggleMute="toggleMute" :extenStatus="extenStatus" />
      </PopoverPanel>
    </transition>

    <PopoverButton title='FeedBack' aria-label='FeedBack' id="popoverbutton"
      class='tw-bg-blue-500 tw-rounded-full tw-px-2 tw-h-14 tw-min-w-[3.5rem] tw-place-content-center tw-text-white tw-flex tw-items-center tw-group tw-shadow-[0_0.5rem_1.5rem_#8257e540]'
      :class="{ 'tw-animate-pulse tw-bg-orange-500': ['Recebendo chamada', 'Em chamada'].includes(agentStatus), 'tw-bg-orange-500': ['Registro falhou', 'Desconectado'].includes(agentStatus) }">
      <ph-phone :size="32" style="fill: white;" />

      <span
        class='tw-max-w-0 tw-truncate group-hover:tw-max-w-xl tw-transition-all tw-duration-500 tw-ease-in-out tw-text-clip tw-overflow-hidden'
        :class="{ 'tw-max-w-xl': ['Recebendo chamada', 'Em chamada'].includes(agentStatus) }">
        <span class='tw-pl-2' />
        {{ agentStatus === 'Em chamada' ? `Em chamada ${formatTime(callDuration || 0)} ` :
          (['Recebendo chamada'].includes(agentStatus) ? 'Recebendo chamada' : 'Fazer uma ligação') }}
      </span>
      <audio ref="localStream" autoplay playsinline muted v-show="false"></audio>
      <audio ref="remoteStream" autoplay playsinline v-show="false"></audio>
    </PopoverButton>
  </Popover>
</template>
