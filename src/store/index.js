import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth
  },
  getters: {
    getWindowWidth(state){
      return state.windowWidth
    }
  },
  mutations: {
    setWindowWidth(state, payload){
      state.windowWidth = payload
    }
  },
  actions: {
    
  },
  modules: {
  }
})
