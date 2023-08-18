import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

if (!document.getElementById('vittelgroup-vcall')) {
  const div = document.createElement('div')
  div.id = 'vittelgroup-vcall'
  document.body.appendChild(div)
  const shadowRoot = div.attachShadow({ mode: 'open' })
  const NOOP = () => {}
  shadowRoot.removeAttribute = NOOP
  shadowRoot.setAttribute = NOOP
  fetch('https://cdn.jsdelivr.net/gh/dionisioviei/vcall-widget@master/dist/style.css')
    .then((response) => response.text())
    .then((styles) => {
      const style = document.createElement('style')
      style.textContent = styles
      shadowRoot?.appendChild(style)
    })

  createApp(App).mount(shadowRoot)
} else {
  createApp(App).mount('#vittelgroup-vcall')
}
