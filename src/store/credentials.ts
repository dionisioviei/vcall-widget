function scrambleSecret(secret: string) {
  const key = window.location.hostname

  let scrambledSecret = ''
  for (let i = 0; i < secret.length; i++) {
    const secretChar = secret.charCodeAt(i)
    const keyChar = key.charCodeAt(i % key.length)
    const scrambledChar = String.fromCharCode(secretChar ^ keyChar)
    scrambledSecret += scrambledChar
  }
  return scrambledSecret
}

function unscrambleSecret(scrambledSecret: string) {
  return scrambleSecret(scrambledSecret)
}

function setAudioDevices({
  ringAudioDeviceId,
  voiceAudioDeviceId
}: {
  ringAudioDeviceId?: string
  voiceAudioDeviceId?: string
}) {
  ringAudioDeviceId && localStorage.setItem('@vcallwidget:ringAudioDeviceId', ringAudioDeviceId)
  voiceAudioDeviceId && localStorage.setItem('@vcallwidget:voiceAudioDeviceId', voiceAudioDeviceId)
}

function setAutoReconnect(shouldAutoReconnect: boolean) {
  localStorage.setItem('@vcallwidget:shouldAutoReconnect', `${shouldAutoReconnect}`)
}

function getAutoReconnect() {
  const shouldAutoReconnect = localStorage.getItem('@vcallwidget:shouldAutoReconnect')
  if (!shouldAutoReconnect) {
    return true
  }
  return shouldAutoReconnect === 'true'
}

function setCredentials({
  authuser,
  secret,
  port,
  domain,
  transport,
  name
}: {
  authuser: string
  secret: string
  port: number
  domain: string
  transport: string
  name: string
}) {
  localStorage.setItem('@vcallwidget:authuser', authuser)
  localStorage.setItem('@vcallwidget:secret', scrambleSecret(secret))
  localStorage.setItem('@vcallwidget:port', port.toString())
  localStorage.setItem('@vcallwidget:domain', scrambleSecret(domain))
  localStorage.setItem('@vcallwidget:transport', transport)
  localStorage.setItem('@vcallwidget:name', name)
}

function getAudioDevices() {
  const ringAudioDeviceId = localStorage.getItem('@vcallwidget:ringAudioDeviceId')
  const voiceAudioDeviceId = localStorage.getItem('@vcallwidget:voiceAudioDeviceId')

  return { ringAudioDeviceId, voiceAudioDeviceId }
}

function credentialsInURL() {
  const urlParams = new URLSearchParams(window.location.search)

  const authuser = urlParams.get('authuser')
  const name = urlParams.get('name')
  const secret = urlParams.get('secret')
  const port = urlParams.get('port')
  const domain = urlParams.get('domain')
  const transport =
    (urlParams.get('transport') as null | 'udp' | 'tcp') ||
    (urlParams.get('protocol') as null | 'udp' | 'tcp') ||
    'udp'

  if (authuser && secret && port && domain && transport) {
    return {
      name: name || authuser,
      authuser,
      secret,
      port: parseInt(port) || 5060,
      domain,
      transport
    }
  }

  return null
}

function getCredentials() {
  const urlCredentials = credentialsInURL()

  if (urlCredentials) {
    return urlCredentials
  }

  const authuser = localStorage.getItem('@vcallwidget:authuser')
  const name = localStorage.getItem('@vcallwidget:name')
  const scrambledSecret = localStorage.getItem('@vcallwidget:secret')
  const port = parseInt(localStorage.getItem('@vcallwidget:port') || '5060')
  const scrambledDomain = localStorage.getItem('@vcallwidget:domain')
  let transport = localStorage.getItem('@vcallwidget:transport') as null | 'udp' | 'tcp'
  if (transport !== 'udp' && transport !== 'tcp') {
    transport = 'udp'
  }
  let secret = null
  let domain = null
  if (scrambledSecret) {
    secret = unscrambleSecret(scrambledSecret)
  }
  if (scrambledDomain) {
    domain = unscrambleSecret(scrambledDomain)
  }

  return { name, authuser, secret, port, domain, transport }
}

export {
  setCredentials,
  getCredentials,
  getAudioDevices,
  setAudioDevices,
  setAutoReconnect,
  getAutoReconnect
}
