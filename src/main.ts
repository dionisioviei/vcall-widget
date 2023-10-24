import './assets/reset.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

if (!document.getElementById('vittelgroup-vcall')) {
  const app = document.createElement('div')
  app.id = 'vittelgroup-vcall'
  document.body.appendChild(app)
}
const pinia = createPinia()
createApp(App).use(pinia).mount('#vittelgroup-vcall')
