import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: {
    incCounter(state) {
      state.counter++
    },
    decCounter(state) {
      state.counter--
    },
    ranCounter(state, ranNumber) {
      state.counter += ranNumber
    },
    ranCounterDec(state, ranNumber) {
      state.counter -= ranNumber
    },
    setColorCode(state, newV) {
      state.colorCode = newV
    },
  },
  actions: {
    ranCounter({ commit }){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('ranCounter', response.data)
      })
    },
    ranCounterDec({ commit }){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('ranCounterDec', response.data)
      })
    },
    setColorCode({ commit }, newV){
      commit('setColorCode', newV)
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
