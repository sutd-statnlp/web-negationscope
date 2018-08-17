<template>
  <div class="panel">
<v-card v-if="sentence" class="elevation-6">
  <v-layout row wrap pa-4>
    <v-flex xs12>
      <h2>
        <span v-html="sentence"></span>
      </h2>
    </v-flex>
    <h4 class="font-weight-regular font-italic">
      Negation scope (partial scopes) in <span class="orange--text text--darken-3">orange</span>,
      negation cue in <span class="cyan--text text--darken-2">blue</span>,
      gaps as non-orange spans
    </h4>
  </v-layout>
</v-card>
  </div>
</template>

<script>
import dataUtil from '@/util/DataUtil'
export default {
  name: 'Panel',
  data () {
    return {
    }
  },
  methods: {
    convertWordByCue (word, cue, scope) {
      word = dataUtil.convertWordByCue(
        word,
        cue,
        `<span class="cyan--text text--darken-2">`,
        `</span>`
      )
      return word
    },
    convertWordByScope (word, cue, scope) {
      word = dataUtil.convertWordByScope(
        word,
        scope,
        `<span class="orange--text text--darken-3">`,
        `</span>`
      )
      return word
    },
    convertWord (word, cue, scope, hasCues, hasScopes) {
      let convertedWord = word + ' '
      if (hasCues) {
        convertedWord = this.convertWordByCue(
          convertedWord,
          cue,
          scope)
      }
      if (hasScopes) {
        convertedWord = this.convertWordByScope(
          convertedWord,
          cue,
          scope)
      }
      return convertedWord
    }
  },
  computed: {
    sentence () {
      let result = this.$store.getters['sentence/getResult']
      if (!result) {
        return null
      }
      let sentence = ''
      let words = result.words
      let hasScopes = result.scopes.length > 0
      let hasCues = result.cues.length > 0
      for (let index = 0; index < words.length; index++) {
        let word = words[index]
        let cue = result.cues[index]
        let scope = result.scopes[index]
        let convertedWord = this.convertWord(word, cue, scope, hasCues, hasScopes)
        sentence += convertedWord
      }
      return sentence
    }
  }
}
</script>

<style scoped>

</style>
