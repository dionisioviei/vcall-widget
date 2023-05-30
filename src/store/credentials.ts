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

function credentialsInURL() {
  const urlParams = new URLSearchParams(window.location.search)

  const authuser = urlParams.get('authuser')
  const name = urlParams.get('name')
  const secret = urlParams.get('secret')
  const port = urlParams.get('port')
  const domain = urlParams.get('domain')
  const transport = (urlParams.get('transport') as null | 'udp' | 'tcp') || 'udp'

  console.log({ authuser, name, secret, port, domain, transport })

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
  console.log({ urlCredentials })

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

export { setCredentials, getCredentials }
