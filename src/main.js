import { createApp } from 'vue';
import { createManager } from '@vue-youtube/core';
import App from './App.vue';
import router from './router';

// Internal CSS
import './assets/styles/style.css';
import './assets/styles/mystyle.css';

// Create the Vue app instance
const app = createApp(App);

app.use(createManager())

// Use router and mount the app
app.use(router).mount('#app');
