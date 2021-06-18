import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monedas: 
    []
  },
  mutations: {    
  },
  actions: {
    addMoneda({ state }, payload) {      
      state.monedas.push(payload);
      localStorage.setItem('monedas', JSON.stringify(state.monedas))
    },
    setMonedas({state}, payload){      
      state.monedas = payload
    },
    eliminarMoneda({state}, payload){
      for (const key in state.monedas) {
          if(state.monedas[key].valor == payload){
            state.monedas.splice(key, 1);
            break;
          }
      }
      localStorage.setItem('monedas', JSON.stringify(state.monedas))
      
    }
  },
  modules: {
  }
})
