import { getAudioDevices } from '../store/credentials'
import { incomingCallSound, callingSound } from '../assets/sounds'

export interface HTMLNewAudioElement extends HTMLAudioElement {
  setSinkId(id: string): Promise<void>
  sinkId: string
}

function playCallingSound(callingAudio: HTMLNewAudioElement) {
  const { voiceAudioDeviceId } = getAudioDevices()

  callingAudio.loop = true

  if (!callingAudio.paused) {
    return
  }

  if (callingAudio.src) {
    callingAudio.currentTime = 0
    callingAudio.play()
    return
  }

  callingAudio.src = callingSound

  if (voiceAudioDeviceId && voiceAudioDeviceId !== 'default') {
    callingAudio.oncanplay = () => {
      callingAudio.setSinkId(voiceAudioDeviceId).then(() => {
        callingAudio.play()
      })
    }
  } else {
    callingAudio.oncanplay = () => {
      callingAudio.play()
    }
  }

  return
}

function playIncomingCallSound(incomingAudio: HTMLNewAudioElement) {
  const { ringAudioDeviceId } = getAudioDevices()

  incomingAudio.loop = true

  if (!incomingAudio.paused) {
    return
  }

  if (incomingAudio.src) {
    incomingAudio.currentTime = 0
    incomingAudio.play()
    return
  }

  incomingAudio.src = incomingCallSound

  if (ringAudioDeviceId && ringAudioDeviceId !== 'default') {
    incomingAudio.oncanplay = () => {
      incomingAudio.setSinkId(ringAudioDeviceId).then(() => {
        incomingAudio.play()
      })
    }
  } else {
    incomingAudio.oncanplay = () => {
      incomingAudio.play()
    }
  }

  return
}

export { playCallingSound, playIncomingCallSound }
