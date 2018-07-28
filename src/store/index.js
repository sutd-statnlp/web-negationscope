import Vue from 'vue'
import Vuex from 'vuex'
import sentenceModule from './SentenceModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sentence: sentenceModule
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
