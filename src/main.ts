import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './plugins'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(i18n)
  .use(createPinia())
  .mount('#app')
