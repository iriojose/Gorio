import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "@mdi/font/css/materialdesignicons.css";
import vuetify from './plugins/vuetify';
import typewriter from './plugins/typewriter';
import i18n from './lang'

Vue.config.productionTip = false

new Vue({
	store,
	vuetify,
	typewriter,
	i18n,
    render: h => h(App)
}).$mount('#app')
