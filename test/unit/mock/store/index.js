import Vue from 'vue'
import Vuex from 'vuex'
import mockSentenceModule from './MockSentenceModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sentence: mockSentenceModule
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
