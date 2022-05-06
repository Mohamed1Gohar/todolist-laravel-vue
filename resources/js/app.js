require('./bootstrap');
require('popper.js');


window.Vue = require('vue');
import App from './components/app.vue';


import { createApp } from "vue";

const app = createApp({
    // root instance definition
    el:'#app',
    components:{App}
});

app.mount("#app");
