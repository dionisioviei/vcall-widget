<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import { PhPhoneCall, PhSpinner, PhSignIn, PhSignOut, PhWaveform, PhArrowsClockwise } from "@phosphor-icons/vue";
import { getCredentials, setCredentials, setAudioDevices, getAudioDevices } from '../../store/credentials';

const { authuser, domain, name, port, secret, transport } = getCredentials();
const { ringAudioDeviceId: ringAudioDevice, voiceAudioDeviceId: voiceAudioDevice } = getAudioDevices();

const authUsername = ref(authuser || '');
const authName = ref(name || '');
const authSecret = ref(secret || '');
const authDomain = ref(domain || '');
const authPort = ref(port);
const unregistering = ref(false);
const authTransport = ref<'udp' | 'tcp'>(transport || 'udp');
const isFirefox = ref<boolean>(false);
const ringAudioDeviceId = ref(ringAudioDevice || "default");
const voiceAudioDeviceId = ref(voiceAudioDevice || "default");
const speakers = ref([{
    name: 'Padrão do Sistema',
    deviceId: 'default'
}]);
const hasMicPermission = ref(false);


interface NewMediaDevices extends MediaDevices {
    selectAudioOutput(): Promise<MediaDeviceInfo>
}

const props = defineProps<{
    show: boolean; register: ({ authuser, secret, domain, port, name, transport, }: {
        authuser: string;
        secret: string;
        domain: string;
        port: number;
        name: string;
        transport: "udp" | "tcp";
    }) => void; unregister: () => void; agentStatus: string;
}>();

function handleChooseRingAudio() {
    if (isFirefox.value) {
        const devices = navigator.mediaDevices as NewMediaDevices;
        devices.selectAudioOutput().then((device) => {
            if (device.deviceId) {
                setAudioDevices({
                    ringAudioDeviceId: device.deviceId
                });
            }
        })
            .catch((err) => {
                console.error(`${err.name}: ${err.message}`);
            });
        return;
    }
}

function handleChooseVoiceAudio() {
    if (isFirefox.value) {
        const devices = navigator.mediaDevices as NewMediaDevices;
        devices.selectAudioOutput().then((device) => {
            if (device.deviceId) {
                setAudioDevices({
                    voiceAudioDeviceId: device.deviceId
                });
            }
        })
            .catch((err) => {
                console.error(`${err.name}: ${err.message}`);
            });
        return;
    }
}

function handleSubmit() {
    setCredentials({
        authuser: authUsername.value,
        domain: authDomain.value,
        name: authName.value || name || authUsername.value,
        port: authPort.value,
        secret: authSecret.value,
        transport: authTransport.value
    });
    props.register({
        authuser: authUsername.value,
        domain: authDomain.value,
        name: authName.value || name || authUsername.value,
        port: authPort.value,
        secret: authSecret.value,
        transport: authTransport.value
    });
}

function handleLogout() {
    props.unregister();
}

function askPermission() {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function () {
                hasMicPermission.value = true;

            })
            .catch(function () {
                hasMicPermission.value = false;
            });
    } else {
        hasMicPermission.value = false;
        console.error('getUserMedia is not supported in this browser.');
    }
}

watchEffect(() => {
    setAudioDevices({
        voiceAudioDeviceId: voiceAudioDeviceId.value,
        ringAudioDeviceId: ringAudioDeviceId.value
    });
})

watchEffect(() => {
    console.log('unregistering', unregistering.value, props.agentStatus);
    if (unregistering.value && props.agentStatus === 'Desconectado') {
        unregistering.value = false;
    }
});

const registering = computed(() => {
    return ['Conectando...'].includes(props.agentStatus)
});

function handleOutputAudioUpdate() {
    const shouldReload = confirm('Para atualizar as configurações de áudio, você precisa recarregar a página. Tem certeza de que deseja continuar? Clique em "OK" para recarregar ou "Cancelar" para sair.');
    shouldReload && location.reload();
}

watchEffect(() => {
    if (hasMicPermission.value) {
        navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                const outputDevices = devices.filter(device => device.kind === 'audiooutput');
                speakers.value = outputDevices.map(device => ({
                    name: device.label,
                    deviceId: device.deviceId
                }));
                console.log({ devices });
            })
            .catch(error => {
                console.error('Error enumerating devices:', error);
            });
    }
});

onMounted(() => {
    if (navigator.userAgent.includes('Firefox')) {
        isFirefox.value = true;
    }
})

onMounted(() => {
    if ('mediaDevices' in navigator && 'enumerateDevices' in navigator.mediaDevices) {
        navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                const microphones = devices.filter(device => device.kind === 'audioinput');
                const isAllDevicesEmpty = microphones.map(mic => mic.deviceId).join('');
                if (microphones.length <= 0 || isAllDevicesEmpty === '') {
                    askPermission();
                } else {
                    hasMicPermission.value = true;
                }
            })
            .catch(error => {
                console.error('Error enumerating devices:', error);
            });
    } else {
        console.error('enumerateDevices is not supported in this browser.');
    }
});

</script>

<template>
    <div v-show="props.show" class="tw-border-zinc-700 tw-p-2 tw-my-2">
        <span class='tw-text-xl tw-leading-4 tw-flex tw-items-center tw-gap-2 tw-my-2'>
            Dados do Login
        </span>

        <form class='tw-my-4 tw-w-full tw-flex tw-flex-col tw-gap-2' @submit.prevent="handleSubmit">
            <div class="tw-flex tw-flex-row tw-gap-2 tw-mb-0">
                <input type="text" placeholder='Nome' v-model="authName" autocomplete="name" class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none' />
                <input type="text" placeholder='Usuário ou Ramal' :required="true" autocomplete="tel-extension username"
                    v-model="authUsername" class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none' />
            </div>
            <input type="password" placeholder='Senha' :required="true" v-model="authSecret" autocomplete="current-password"
                class='md:tw-min-w-[304px] tw-w-full tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none' />
            <input type="text" placeholder='Domínio' :required="true" v-model="authDomain" autocomplete="url" class='md:tw-min-w-[304px] tw-w-full tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none' />
            <div class="tw-flex tw-flex-row tw-gap-2 tw-mb-1">
                <input type="number" placeholder='Porta' :required="true" v-model="authPort" autocomplete="off" class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500
                 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none' />
                <select v-model="authTransport" required
                    class='md:tw-min-w-[100px] tw-w-52 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-md focus:tw-border-zinc-500 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none'>
                    <option value="udp">Protocolo UDP</option>
                    <option value="tcp">Protocolo TCP</option>
                </select>
            </div>
            <span class='tw-text-xl tw-leading-4 tw-flex tw-items-center tw-gap-2 tw-my-1'>
                Saídas de Áudio
            </span>
            <div class="tw-flex tw-flex-row tw-gap-2 tw-mb-1">
                <div v-if="!isFirefox" class="tw-flex tw-flex-row tw-justify-center tw-items-center">
                    <div
                        class="tw-bg-zinc-800 tw-h-10 tw-flex tw-justify-center tw-items-center tw-rounded-l-md tw-border-r-2 tw-border-zinc-900 tw-p-2 tw-text-xs tw-font-bold">
                        Toque
                    </div>
                    <select v-model="ringAudioDeviceId" required
                        class='md:tw-min-w-[100px] tw-w-40 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-r-md focus:tw-border-zinc-500 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none'>
                        <option v-for="speaker in speakers" :value="speaker.deviceId" :key="speaker.deviceId">
                            {{ speaker.name }}
                        </option>
                    </select>
                </div>
                <div v-if="!isFirefox" class="tw-flex tw-flex-row tw-justify-center tw-items-center">
                    <div
                        class="tw-bg-zinc-800 tw-h-10 tw-flex tw-justify-center tw-items-center tw-rounded-l-md tw-border-r-2 tw-border-zinc-900 tw-p-2 tw-text-xs tw-font-bold">
                        Voz
                    </div>
                    <select v-model="voiceAudioDeviceId" required
                        class='md:tw-min-w-[100px] tw-w-40 tw-h-10 tw-px-2 tw-text-sm tw-placeholder-zinc-400 tw-text-zinc-100 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-r-md focus:tw-border-zinc-500 focus:tw-outline-blue-500 focus:tw-bg-zinc-800 focus:tw-outline tw-outline-none'>
                        <option v-for="speaker in speakers" :value="speaker.deviceId" :key="speaker.deviceId">
                            {{ speaker.name }}
                        </option>
                    </select>
                </div>
                <span v-if="!isFirefox" class='tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2 tw-my-4'>
                    <button v-if="!isFirefox" type='button' title='Atualizar' aria-labelledby='Atualizar'
                        @click="handleOutputAudioUpdate"
                        class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-px-2 tw-h-10 tw-w-fit tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 tw-text-green-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'>
                        <PhArrowsClockwise :size="20" />
                    </button>
                </span>
                <button v-if="isFirefox" type='button' title='Ao Tocar' aria-labelledby='Ao Tocar'
                    @click="handleChooseRingAudio"
                    class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'>
                    <PhPhoneCall :size="20" />Ao Tocar
                </button>
                <button v-if="isFirefox" type='button' title='Voz' aria-labelledby='Voz' @click="handleChooseVoiceAudio"
                    class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear'>
                    <PhWaveform :size="20" />Voz
                </button>
            </div>
            <div class='tw-flex tw-gap-2 tw-mt-2'>

                <button type='submit' title='Salvar' aria-labelledby='Salvar'
                    class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 hover:tw-text-green-500 disabled:hover:tw-text-zinc-100 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear disabled:tw-opacity-50 disabled:tw-border-2'
                    :disabled="registering || props.agentStatus === 'Conectado' || props.agentStatus === 'Desconectando'">
                    <component :is="registering ? PhSpinner : PhSignIn" :size="20"
                        :class="{ 'tw-animate-spin': registering }" />{{ registering
                            ? 'Registrando' :
                            'Conectar' }}
                </button>
                <button type='button' title='Desconectar' aria-labelledby='Desconectar' @click="handleLogout"
                    class='tw-bg-zinc-800 tw-rounded-lg tw-py-1 tw-w-24 tw-flex tw-flex-1 tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-border-2 tw-border-transparent
                hover:tw-border-blue-500 hover:tw-text-red-500 disabled:hover:tw-text-zinc-100 focus:tw-outline-none focus:tw-border-blue-500 tw-transition-all tw-duration-400 tw-ease-linear disabled:tw-opacity-50 disabled:tw-border-2'
                    :disabled="unregistering || ['Desconectado', 'Registro falhou'].includes(props.agentStatus)">
                    <component :is="unregistering ? PhSpinner : PhSignOut" :size="20"
                        :class="{ 'tw-animate-spin': unregistering }" />{{ unregistering
                            ? 'Desconectando' :
                            'Desconectar' }}
                </button>
            </div>
        </form>
    </div>
</template>