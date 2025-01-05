import './assets/main.css'

import { createApp } from 'vue'
import indexToDo from './views/indexToDo.vue'
import router from './router'

const app = createApp(indexToDo)

app.use(router)

app.mount('#app')
