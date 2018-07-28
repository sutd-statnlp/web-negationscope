
export default {
  namespaced: true,
  state: {
    result: null,
    samples: [
      {
        content: 'He declares that he heard cries but is unable to state from what direction they came.',
        matchingWords: [
          true, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, false
        ],
        cues: [
          '', '', '', '', '', '', '', '', 'un', '', '', '', '', '', '', '', ''
        ]
      },
      {
        content: 'There is neither money nor credit in it, and yet one would wish to tidy it up.',
        matchingWords: [
          true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false
        ],
        cues: [
          '', '', 'neither', '', 'nor', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
        ]
      }
    ]
  },
  getters: {
    getSamples (state) {
      return state.samples
    },
    getResult (state) {
      return state.result
    }
  },
  mutations: {
    analyze (state, payload) {
      state.result = payload.result
    }
  },
  actions: {
    analyze (context, payload) {
      let result = payload.sentence
      context.commit('analyze', {result: result})
    }
  }
}
