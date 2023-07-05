import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MyGym from './MyGym.vue'
import Computed from './Computed.vue'

// createApp(App).mount('#app')
// createApp(MyGym).mount('#myGym')
createApp(Computed).mount('#computed')