import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import './static/inquiry.css'
import './static/main.bundle.css'
import './static/startup-element.css'
import './static/style.css'
createApp(App).use(router).mount('#app')
