
import sentenceModule from '@/store/SentenceModule'

export default {
  namespaced: true,
  state: {
    result: sentenceModule.state.samples[0],
    samples: sentenceModule.state.samples
  },
  getters: sentenceModule.getters,
  mutations: sentenceModule.mutations,
  actions: sentenceModule.actions
}
