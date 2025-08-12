import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap"
import router from './router';
import { createPinia } from 'pinia';

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
