import './assets/reset.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

if (!document.getElementById('vittelgroup-vcall')) {
  const app = document.createElement('div')
  app.id = 'vittelgroup-vcall'
  document.body.appendChild(app)
}
createApp(App).mount('#vittelgroup-vcall')
