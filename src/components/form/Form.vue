<template>
<v-card class="elevation-6">
  <v-form ref="form" v-model="validForm" lazy-validation>
  <v-toolbar dark color="primary">
    <v-toolbar-title>Negation Scope</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <v-btn id="btn-samples" slot="activator" color="white blue--text"> Samples </v-btn>
      <v-list>
        <v-list-tile v-for="(item, index) in samples" :key="index" @click="chooseSample(item)">
          <v-list-tile-title>{{`Sample ${index + 1}`}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
  <v-card-text>
      <v-textarea
          v-model="currentSentence.content"
          rows="3"
          required
          auto-grow prepend-icon="translate" name="sentence" label="Sentence" type="text"></v-textarea>
      <v-layout row wrap align-center justify-center>
        <v-flex xs3 md1 class="ml-3" v-for="(item, index) in cues.words" :class="isSpecialChar(item) ? 'hidden-sm-and-up hidden-sm-and-down' : ''" :key="index">
          <v-text-field v-model="cues.values[index]" :counter="item.length" :label="item" required></v-text-field>
        </v-flex>
      </v-layout>
  </v-card-text>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn id="btn-submit" color="primary" :loading="loading" :disabled="!validForm || loading" @click="submitAnalysis">Analyze</v-btn>
  </v-card-actions>
  </v-form>
</v-card>
</template>

<script>
import dataUtil from '@/util/DataUtil'
export default {
  name: 'Form',
  data () {
    return {
      validForm: false,
      loading: false,
      sentence: '',
      currentSentence: {
        content: `This person is alone and can not be approached by letter without a breach of that absolute secrecy.`,
        matchingWords: [
        ],
        cues: [
        ]
      }
    }
  },
  computed: {
    samples () {
      return this.$store.getters['sentence/getSamples']
    },
    cues () {
      let words = this.currentSentence.content.trim().split(' ')
      words = dataUtil.seperateSpecialChar(words)
      let values = []
      if (this.currentSentence.cues.length > 0) {
        values = this.currentSentence.cues
      } else {
        words.forEach(item => {
          values.push('')
        })
      }
      return {
        words: words,
        values: values
      }
    }
  },
  methods: {
    chooseSample (item) {
      this.currentSentence = {...item}
    },
    submitAnalysis () {
      this.loading = true
      setTimeout(() => {
        this.currentSentence.cues = this.cues.values
        this.$store.dispatch('sentence/analyze', {
          sentence: this.currentSentence
        })
        this.loading = false
      }, 1000)
    },
    isSpecialChar (word) {
      return dataUtil.isOrContainSpecialChar(word) !== null
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
