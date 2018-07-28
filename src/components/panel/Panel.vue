<template>
  <div class="panel">
<v-card v-if="sentence" class="elevation-6">
  <v-layout row wrap pa-4>
    <h2>
      <span v-html="sentence"></span>
    </h2>
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
    convertWordByCue (word, cue, matchingWord) {
      word = dataUtil.convertWordByCue(
        word,
        cue,
        `<span class="cyan--text text--darken-2">`,
        `</span>`
      )
      return word
    },
    convertWordByMatching (word, cue, matchingWord) {
      word = dataUtil.convertWordByMatching(
        word,
        matchingWord,
        `<span class="orange--text text--darken-3">`,
        `</span>`
      )
      return word
    },
    convertWord (word, cue, matchingWord, hasCues, hasMatchingWords) {
      let convertedWord = word + ' '
      if (hasCues) {
        convertedWord = this.convertWordByCue(
          convertedWord,
          cue,
          matchingWord)
      }
      if (hasMatchingWords) {
        convertedWord = this.convertWordByMatching(
          convertedWord,
          cue,
          matchingWord)
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
      let words = result.content.split(' ')
      words = dataUtil.seperateSpecialChar(words)
      let hasMatchingWords = result.matchingWords.length > 0
      let hasCues = result.cues.length > 0
      for (let index = 0; index < words.length; index++) {
        let word = words[index]
        let cue = result.cues[index]
        let matchingWord = result.matchingWords[index]
        let convertedWord = this.convertWord(word, cue, matchingWord, hasCues, hasMatchingWords)
        sentence += convertedWord
      }
      return sentence
    }
  }
}
</script>

<style scoped>

</style>
