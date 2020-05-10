import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "@mdi/font/css/materialdesignicons.css";
import vuetify from './plugins/vuetify';
import typewriter from './plugins/typewriter';

Vue.config.productionTip = false

new Vue({
	store,
	vuetify,
	typewriter,
    render: h => h(App)
}).$mount('#app')
