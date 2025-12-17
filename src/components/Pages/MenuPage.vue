<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue'
import {
  PhPhoneCall,
  PhSignIn,
  PhNotebook,
  PhArrowLeft,
  PhUser,
  PhArrowsDownUp,
  PhMoon,
  PhSun
} from '@phosphor-icons/vue'
import CloseButton from '../CloseButton.vue'
import CallPage from './CallPage.vue'
import LoginPage from './LoginPage.vue'
import HistoryPage from './HistoryPage.vue'
import { getCredentials } from '../../store/credentials'

const nameHeader = ref<null | string>('')

const props = defineProps<{
  agentStatus: string
  callDuration: null | number
  extenStatus: string
  buttonPosition: 'top' | 'bottom'
  colorScheme: 'light' | 'dark'
  inCallStatus: {
    inCall: boolean
    status?:
      | {
          muted: boolean
          onHold: boolean
          number: string
          onSpeaker: boolean
          incallId: string
          duration: number
          displayName?: string
          callDirection: 'incoming' | 'outgoing'
        }
      | undefined
  }
  answer: () => void
  hangup: () => void
  sendDTMF: (dtmfToSend: string) => void
  startCall: (numberToCall: string) => void
  toggleHold: () => void
  toggleMute: () => void
  toggleButtonPosition: () => void
  toggleColorScheme: () => void
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
  unregister: () => void
}>()

const Routes = [
  {
    name: 'Call',
    label: 'Ligar',
    icon: PhPhoneCall
  },
  {
    name: 'Login',
    label: 'Conexão',
    icon: PhSignIn
  },
  {
    name: 'History',
    label: 'Histórico',
    icon: PhNotebook
  }
] as const

type RouteName = (typeof Routes)[number]['name'] | 'Menu'

const activePage = ref<RouteName>('Menu')
const click2call = ref<undefined | string>(undefined)

function changePage(page: RouteName) {
  activePage.value = page
}

onMounted(() => {
  const { authuser, name } = getCredentials()
  nameHeader.value = name || authuser
})

watch(props, () => {
  if (props.agentStatus === 'Conectado') {
    const { authuser, name } = getCredentials()
    nameHeader.value = name || authuser
  }
})

watchEffect(() => {
  if (
    ['Em chamada', 'Recebendo chamada'].includes(props.agentStatus) &&
    activePage.value !== 'Call'
  ) {
    changePage('Call')
  }
})
</script>

<template>
  <div
    class="tw-p-4 tw-relative tw-rounded-2xl tw-mb-4 tw-flex tw-flex-col tw-items-center tw-shadow-md tw-w-[calc(100vw-2rem)] md:tw-w-auto tw-transition-colors"
    :class="{
      'tw-bg-primary tw-shadow-slate-800': colorScheme === 'dark',
      'tw-bg-white tw-shadow-gray-400': colorScheme === 'light'
    }"
  >
    <header>
      <button
        v-show="
          activePage !== 'Menu' &&
          ['Em chamada', 'Recebendo chamada'].includes(props.agentStatus) === false
        "
        type="button"
        title="Voltar"
        aria-label="Voltar"
        @click="changePage('Menu')"
        class="tw-top-4 tw-left-4 tw-absolute tw-flex tw-flex-row-reverse tw-justify-center tw-items-center tw-bg-transparent tw-transition-colors"
        :class="{
          'tw-text-zinc-400 hover:tw-text-zinc-100': colorScheme === 'dark',
          'tw-text-gray-600 hover:tw-text-gray-900': colorScheme === 'light'
        }"
      >
        Voltar
        <PhArrowLeft weight="bold" />
      </button>
      <span
        class="tw-text-xl tw-leading-6 tw-flex tw-flex-row tw-justify-start tw-items-center tw-truncate tw-text-clip tw-overflow-hidden tw-transition-colors"
        :class="{
          'tw-text-white': colorScheme === 'dark',
          'tw-text-gray-900': colorScheme === 'light'
        }"
      >
        <PhUser class="tw-mr-2" />{{ nameHeader || 'Sem usuário' }}
      </span>

      <button
        type="button"
        title="Alternar posição do botão"
        aria-label="Alternar posição do botão"
        @click="props.toggleButtonPosition"
        class="tw-absolute tw-top-3 tw-right-10 tw-bg-transparent tw-p-1 tw-rounded tw-transition-colors"
        :class="{
          'tw-text-zinc-400 hover:tw-text-zinc-100 hover:tw-bg-primary-800': colorScheme === 'dark',
          'tw-text-gray-600 hover:tw-text-gray-900 hover:tw-bg-gray-200': colorScheme === 'light'
        }"
      >
        <PhArrowsDownUp :size="20" weight="bold" />
      </button>

      <CloseButton :colorScheme="colorScheme" />
    </header>

    <div class="tw-flex tw-py-8 tw-gap-2 tw-w-full" v-show="activePage === 'Menu'">
      <button
        v-for="{ icon, name, label } in Routes"
        :key="name"
        type="button"
        :title="name"
        @click="changePage(name)"
        class="tw-rounded-lg tw-py-5 tw-w-24 tw-flex tw-flex-1 tw-flex-col tw-items-center tw-gap-2 focus:tw-outline tw-outline-none tw-transition-all tw-duration-400 tw-ease-linear disabled:tw-outline-none disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
        :class="{
          'tw-bg-primary-800 hover:tw-outline-primary focus:tw-outline-primary tw-text-white':
            colorScheme === 'dark',
          'tw-bg-gray-100 hover:tw-outline-blue-500 focus:tw-outline-blue-500 tw-text-gray-900':
            colorScheme === 'light'
        }"
        :disabled="
          ['Desconectado', 'Conectando...', 'Registro falhou'].includes(props.agentStatus) &&
          name !== 'Login'
        "
      >
        <component :is="icon" :size="32" />
        <span>{{ label }}</span>
      </button>
    </div>

    <CallPage
      :show="activePage === 'Call'"
      :answer="props.answer"
      :hangup="props.hangup"
      :sendDTMF="props.sendDTMF"
      :toggleHold="props.toggleHold"
      :toggleMute="props.toggleMute"
      :startCall="props.startCall"
      :inCallStatus="props.inCallStatus"
      :callDuration="callDuration"
      :agentStatus="props.agentStatus"
      :extenStatus="props.extenStatus"
      :click2call="click2call"
      :colorScheme="colorScheme"
    />
    <LoginPage
      :show="activePage === 'Login'"
      :register="props.register"
      :unregister="props.unregister"
      :agentStatus="agentStatus"
      :colorScheme="colorScheme"
    />
    <HistoryPage :show="activePage === 'History'" :colorScheme="colorScheme" />

    <div
      class="tw-text-xs tw-w-full tw-text-center tw-transition-colors"
      :class="{
        'tw-bg-primary tw-text-neutral-400': colorScheme === 'dark',
        'tw-bg-white tw-text-gray-600': colorScheme === 'light'
      }"
    >
      <div
        class="tw-w-full tw-text-white tw-border-t-2 tw-text-center tw-border-b-2 tw-py-2 tw-rounded-lg tw-px-1 tw-mb-2 tw-tracking-wider"
        :class="{
          'tw-border-green-700 tw-bg-green-700': props.agentStatus === 'Conectado',
          'tw-border-red-700 tw-bg-red-700': ['Registro falhou', 'Desconectado'].includes(
            props.agentStatus
          ),
          'tw-border-orange-700 tw-bg-orange-700 tw-animate-pulse': [
            'Desconectando',
            'Conectando...',
            'Em chamada',
            'Recebendo chamada'
          ].includes(props.agentStatus)
        }"
      >
        <span>{{ props.agentStatus }}</span>
      </div>
      Feito com <b class="tw-animate-pulse">♥</b> pela
      <a
        href="https://digital.vittel.com.br/vittel-cloud-talk/"
        target="_blank"
        class="tw-underline tw-underline-offset-2 hover:tw-text-primary-400 tw-text-xs"
        >Vittel</a
      >
      (v2.3)
    </div>
  </div>
</template>
