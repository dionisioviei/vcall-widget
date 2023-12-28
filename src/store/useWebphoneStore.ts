import { defineStore } from 'pinia'
import { useWebphone } from '@vittelgroup/vwebphone'
import {
  playCallingSound,
  playIncomingCallSound,
  type HTMLNewAudioElement
} from '../utils/playCallSounds'
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watchEffect,
  type Ref,
  type ComputedRef,
  watch
} from 'vue'
import { setCallHistory, setLastCallRecording } from './callHistory'
import { formatTime } from '../utils/formatTime'
import { getAudioDevices, getCredentials } from './credentials'
import { useNotification } from '../utils/useNotification'
import IncomingCallIcon from '../assets/incomingcallIcon'

interface HTMLNewMediaElement extends HTMLMediaElement {
  setSinkId(id: string): Promise<void>
  sinkId: string
  captureStream(): MediaStream
  mozCaptureStream(): MediaStream
}

declare enum JanusStatus {
  NOT_CONNECTED = 'not_connected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error'
}
declare enum RegisterStatus {
  UNREGISTERED = 'unregistered',
  REGISTRATION_FAILED = 'registration_failed',
  REGISTERED = 'registered',
  REGISTERING = 'registering',
  UNREGISTERING = 'unregistering'
}
declare enum ExtenStatus {
  INCALL = 'incall',
  CALLING = 'calling',
  IDLE = 'idle',
  OFFLINE = 'offline',
  RECEIVING_CALL = 'incomingcall'
}

export interface UseWebphoneStore {
  hangup: () => void
  answer: () => void
  startCall: (dialNumber: string) => void
  unregister: () => void
  toggleMute: () => void
  toggleHold: () => void
  sendDTMF: (dtmfToSend: string) => void
  register: ({
    authuser,
    secret,
    domain,
    port,
    name,
    transport
  }: {
    authuser: string
    secret: string
    domain: string
    port: number
    name: string
    transport: 'udp' | 'tcp'
  }) => void
  isOnline: Ref<boolean>
  janusStatus: Ref<JanusStatus>
  registerStatus: Ref<RegisterStatus>
  extenStatus: Ref<ExtenStatus>
  inCallStatus: Ref<{
    inCall: boolean
    hangupReason: string
    status?:
      | {
          muted: boolean
          onHold: boolean
          number: string
          onSpeaker: boolean
          incallId: string
          duration: number
          callDirection: 'incoming' | 'outgoing'
        }
      | undefined
  }>
  localStream: Ref<HTMLNewMediaElement | null>
  remoteStream: Ref<HTMLNewMediaElement | null>
  callDuration: Ref<number>
  callDurationTimer: Ref<null | number>
  isStatic: Ref<boolean>
  mediaRecorder: Ref<null | MediaRecorder>
  recordedChunks: Ref<Blob[]>
  lastCallInfo: {
    lastNumberTalked: string
    lastCallDate: Date
    lastCallDirection: string
    lastCallDuration: number
  }
  hasLastCallInfo: Ref<boolean>
  agentStatus: ComputedRef<
    | 'Conectado'
    | 'Em chamada'
    | 'Recebendo chamada'
    | 'Desconectado'
    | 'Conectando...'
    | 'Desconectando...'
    | 'Registro falhou'
  >
  openPopover: () => void
}

export const useWebphoneStore = defineStore('webphone', (): UseWebphoneStore => {
  const localStream = ref<HTMLNewMediaElement>(new Audio() as HTMLNewMediaElement)
  const remoteStream = ref<HTMLNewMediaElement>(new Audio() as HTMLNewMediaElement)

  localStream.value.autoplay = true
  localStream.value.muted = true
  remoteStream.value.autoplay = true

  const callingAudio = ref(new Audio() as HTMLNewAudioElement)
  const incomingAudio = ref(new Audio() as HTMLNewAudioElement)

  const callDuration = ref<number>(0)
  const callDurationTimer = ref<null | number>(null)
  const isStatic = ref(false)
  const [isGranted, sendNotification] = useNotification()
  const mediaRecorder = ref<null | MediaRecorder>(null)
  const recordedChunks = ref<Blob[]>([])

  const lastCallInfo = reactive({
    lastNumberTalked: '',
    lastCallDate: new Date(),
    lastCallDirection: '',
    lastCallDuration: 0
  })

  const hasLastCallInfo = computed(() => {
    return (
      lastCallInfo.lastNumberTalked !== '' &&
      lastCallInfo.lastCallDuration !== 0 &&
      lastCallInfo.lastCallDirection !== ''
    )
  })

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
    registerTimeout: 30
  })

  const agentStatus = computed(() => {
    switch (registerStatus.value) {
      case 'registered':
        if (extenStatus.value === 'idle') {
          return 'Conectado'
        }
        if (['incall', 'calling'].includes(extenStatus.value)) {
          return 'Em chamada'
        }
        if (extenStatus.value === 'incomingcall') {
          return 'Recebendo chamada'
        }
        return 'Conectado'
      case 'unregistered':
        return 'Desconectado'
      case 'registering':
        return 'Conectando...'
      case 'unregistering':
        return 'Desconectando...'
      case 'registration_failed':
        return 'Registro falhou'
      default:
        return 'Desconectado'
    }
  })

  watchEffect(() => {
    if (['incall', 'calling'].includes(extenStatus.value) && inCallStatus.value.status) {
      lastCallInfo.lastNumberTalked = inCallStatus.value.status.number
      lastCallInfo.lastCallDate = new Date()
      lastCallInfo.lastCallDirection = inCallStatus.value.status.callDirection
      lastCallInfo.lastCallDuration = 0
    }
  })

  watchEffect(() => {
    if (callDuration.value) {
      lastCallInfo.lastCallDuration = callDuration.value
    }
  })

  watchEffect(() => {
    if (!['incall', 'calling'].includes(extenStatus.value) && hasLastCallInfo.value) {
      setCallHistory({
        number: lastCallInfo.lastNumberTalked,
        date: lastCallInfo.lastCallDate,
        duration: formatTime(lastCallInfo.lastCallDuration),
        callDirection: lastCallInfo.lastCallDirection
      })

      lastCallInfo.lastNumberTalked = ''
      lastCallInfo.lastCallDuration = 0
      lastCallInfo.lastCallDirection = ''
    }
  })

  watch(janusStatus, () => {
    console.warn({ janusStatus: janusStatus.value })
    const { authuser, secret, domain, port, transport, name } = getCredentials()
    if (authuser && secret && domain && janusStatus.value === 'connected') {
      register({
        authuser,
        secret,
        port,
        domain,
        transport,
        name: name || authuser
      })
    }
  })

  function startTimer() {
    if (inCallStatus.value.inCall && extenStatus.value === 'incall') {
      callDurationTimer.value = window.setTimeout(() => {
        callDuration.value = callDuration.value + 1
        startTimer()
      }, 1000)
    } else {
      callDuration.value = 0
    }
  }

  watchEffect(() => {
    startTimer()
  })

  watchEffect(() => {
    if (janusStatus.value === 'error') {
      sendNotification({
        title: 'Webphone OFFLINE!',
        options: {
          vibrate: 150,
          body: `Webphone perdeu conexão com o WSS`,
          requireInteraction: true,
          icon: IncomingCallIcon
        }
      })
    }
  })

  function openPopover() {
    const popoverEl = document.querySelector('div[data-headlessui-state]')
    const popoverBtnEl = document.getElementById('popoverbutton')
    if (popoverEl && popoverBtnEl) {
      const stateValue = popoverEl.getAttribute('data-headlessui-state')
      if (stateValue === '') {
        popoverBtnEl.click()
      }
    }
  }

  watchEffect(() => {
    if (extenStatus.value === 'incomingcall') {
      isStatic.value = true
      openPopover()
      // to avoid pausing before it play the audio
      incomingAudio.value.ontimeupdate = () => {
        if (
          extenStatus.value === 'incall' ||
          extenStatus.value === 'idle' ||
          extenStatus.value === 'offline'
        ) {
          incomingAudio.value.pause()
        }
      }
      playIncomingCallSound(incomingAudio.value)
      if (isGranted && document.visibilityState === 'hidden') {
        sendNotification({
          title: 'Nova Chamada',
          options: {
            vibrate: 150,
            body: `Recebendo chamada de ${inCallStatus.value.status?.number}`,
            requireInteraction: true,
            icon: IncomingCallIcon
          }
        })
      }
    }

    if (
      extenStatus.value === 'incall' ||
      extenStatus.value === 'idle' ||
      extenStatus.value === 'offline'
    ) {
      isStatic.value = false
      extenStatus.value === 'incall' && openPopover()
    }

    if (extenStatus.value === 'idle' && mediaRecorder.value) {
      mediaRecorder.value.stop()
      mediaRecorder.value = null
    }

    if (extenStatus.value === 'calling') {
      // to avoid pausing before it play the audio
      callingAudio.value.ontimeupdate = () => {
        if (
          extenStatus.value === 'incall' ||
          extenStatus.value === 'idle' ||
          extenStatus.value === 'offline'
        ) {
          callingAudio.value.pause()
        }
      }
      playCallingSound(callingAudio.value)
    }

    if (extenStatus.value === 'incall' && mediaRecorder.value) {
      mediaRecorder.value.start()
    }
  })

  watchEffect(() => {
    if (
      localStream.value &&
      remoteStream.value &&
      mediaRecorder.value === null &&
      extenStatus.value === 'incall'
    ) {
      const remoteAudioStream = remoteStream.value.captureStream
        ? remoteStream.value.captureStream()
        : remoteStream.value.mozCaptureStream()
      const localAudioStream = localStream.value.captureStream
        ? localStream.value.captureStream()
        : localStream.value.mozCaptureStream()

      remoteAudioStream.onaddtrack = (ev) => {
        if (localStream.value && remoteStream.value) {
          const audioContext = new AudioContext()
          console.log('ON ADD TRACK', ev)
          const localMediaStreamSource = audioContext.createMediaStreamSource(localAudioStream)
          const remoteMediaStreamSource = audioContext.createMediaStreamSource(remoteAudioStream)

          const destination = audioContext.createMediaStreamDestination()
          localMediaStreamSource.connect(destination)
          remoteMediaStreamSource.connect(destination)

          const recordedStream = new MediaStream()
          recordedStream.addTrack(destination.stream.getAudioTracks()[0])

          mediaRecorder.value = new MediaRecorder(recordedStream)
          mediaRecorder.value.ondataavailable = (event) => {
            recordedChunks.value.push(event.data)
          }

          mediaRecorder.value.onstop = () => {
            const recordedBlob = new Blob(recordedChunks.value, { type: 'audio/webm' })
            recordedChunks.value = []
            setLastCallRecording(recordedBlob)
          }
        }
      }
    }
  })

  watchEffect(() => {
    if (inCallStatus.value.hangupReason === 'Not Found') {
      if (isGranted) {
        sendNotification({
          title: 'Número não encontrado',
          options: {
            vibrate: 150,
            body: `Verifique o número e tente novamente`,
            requireInteraction: true,
            icon: IncomingCallIcon
          }
        })
      }
    }
  })

  watchEffect(() => {
    const { voiceAudioDeviceId } = getAudioDevices()
    if (
      voiceAudioDeviceId &&
      voiceAudioDeviceId !== 'default' &&
      ['incomingcall', 'calling'].includes(extenStatus.value) &&
      remoteStream.value
    ) {
      remoteStream.value.srcObject = null // Remove janus source so it can update the sinkid (output device)
      remoteStream.value.setSinkId(voiceAudioDeviceId).catch((err) => console.log({ err }))
    }
  })

  onMounted(() => {
    const { voiceAudioDeviceId } = getAudioDevices()

    if (voiceAudioDeviceId && voiceAudioDeviceId !== 'default' && remoteStream.value) {
      remoteStream.value.setSinkId(voiceAudioDeviceId).catch((err) => console.log({ err }))
    }
  })

  onUnmounted(() => {
    callDurationTimer.value && clearTimeout(callDurationTimer.value)
  })

  return {
    localStream,
    remoteStream,
    callDuration,
    callDurationTimer,
    isStatic,
    mediaRecorder,
    recordedChunks,
    lastCallInfo,
    hasLastCallInfo,
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
    toggleMute,
    agentStatus,
    openPopover
  }
})
