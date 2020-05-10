import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer:true,
	},
	mutations: {
		SET_DRAWER(state,val){
            val ? state.drawer = true:state.drawer = false;
        },
	},
	actions: {
		setDrawer({commit},val){
            commit('SET_DRAWER',val);
        },
	},
	modules: {
	}
})
