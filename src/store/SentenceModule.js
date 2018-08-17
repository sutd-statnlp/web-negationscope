import NegationService from '@/service/NegationService'
import dataUtil from '@/util/DataUtil'
export default {
  namespaced: true,
  state: {
    result: null,
    samples: [
      {
        content: 'He declares that he heard cries but is unable to state from what direction they came.',
        scopes: [
          true, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, false
        ],
        cues: [
          '', '', '', '', '', '', '', '', 'un', '', '', '', '', '', '', '', ''
        ],
        words: ['He', 'declares', 'that', 'he', 'heard', 'cries', 'but', 'is', 'unable', 'to', 'state', 'from', 'what', 'direction', 'they', 'came', '.']
      },
      {
        content: 'There is neither money nor credit in it, and yet one would wish to tidy it up.',
        scopes: [
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
      let sentence = payload.sentence
      let words = sentence.content.split(' ')
      words = dataUtil.seperateSpecialChar(words)
      let cues = sentence.cues
      return new Promise((resolve, reject) => {
        NegationService.detect(words, cues)
          .then((response) => {
            let result = {
              words: words,
              cues: cues,
              scopes: response.data
            }
            context.commit('analyze', {result: result})
            resolve('success')
          }).catch((err) => {
            console.error(err)
            reject(err)
          })
      })
    }
  }
}
