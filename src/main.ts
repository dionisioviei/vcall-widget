import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

if (!document.getElementById('vittelgroup-vcall')) {
  const div = document.createElement('div')
  div.id = 'vittelgroup-vcall'
  const app = document.createElement('div')
  app.id = 'vittelgroup-app'
  document.body.appendChild(app)

  app.attachShadow({ mode: 'open' }).appendChild(div)

  fetch('https://cdn.jsdelivr.net/gh/dionisioviei/vcall-widget@master/dist/style.css')
    .then((response) => response.text())
    .then((styles) => {
      const style = document.createElement('style')
      style.textContent = styles
      div.appendChild(style)
    })

  createApp(App).mount(div)
} else {
  createApp(App).mount('#vittelgroup-vcall')
}
