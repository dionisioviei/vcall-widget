import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

if (!document.getElementById('vittelgroup-vcall')) {
  const div = document.createElement('div')
  div.setAttribute('id', 'vittelgroup-vcall')
  div.attachShadow({ mode: 'open' })

  document.body.appendChild(div)
}

createApp(App).mount('#vittelgroup-vcall')
