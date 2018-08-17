<template>
<v-card class="elevation-6">
  <v-form ref="form" v-model="validForm" lazy-validation>
  <v-toolbar dark color="primary">
    <v-toolbar-title>Negation Scope</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <v-btn data-step="3" data-intro="Start detecting" id="btn-samples" flat outline slot="activator" color="white">
        {{currentSampleIndex >= 0 ? `Sample ${currentSampleIndex + 1}` : 'Samples'}}
      </v-btn>
      <v-list>
        <v-list-tile v-for="(item, index) in samples" :key="index" @click="chooseSample(item, index)">
          <v-list-tile-title>{{`Sample ${index + 1}`}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn flat icon color="white" @click="chooseHelp">
      <v-icon>help</v-icon>
    </v-btn>
  </v-toolbar>
  <v-card-text>
      <v-textarea
          data-intro="The sentence for detecting negation scope"
          data-step="1"
          v-model="currentSentence.content"
          rows="2"
          required
          auto-grow prepend-icon="translate" name="sentence" label="Sentence" type="text"></v-textarea>
      <div data-step="2" data-intro="Negation cues for the sentence">
      <v-layout row wrap align-center justify-center>
        <v-flex xs3 md1 class="ml-3" v-for="(item, index) in cues.words" :class="isSpecialChar(item) || !item ? 'hidden-sm-and-up hidden-sm-and-down' : ''" :key="index">
          <v-text-field v-model="cues.values[index]" :counter="item.length" :label="item" required></v-text-field>
        </v-flex>
      </v-layout>
      </div>
  </v-card-text>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn data-step="3" data-intro="Start Detecting" id="btn-submit" color="primary" :loading="loading" :disabled="!validForm || loading" @click="submitAnalysis">Detect</v-btn>
  </v-card-actions>
  </v-form>
</v-card>
</template>

<script>
import introJs from 'intro.js'
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
        scopes: [
        ],
        cues: [
        ]
      },
      currentSampleIndex: -1
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
    chooseSample (item, index) {
      this.currentSampleIndex = index
      this.currentSentence = {...item}
    },
    submitAnalysis () {
      this.loading = true
      this.currentSentence.cues = this.cues.values
      this.$store.dispatch('sentence/analyze', {
        sentence: this.currentSentence
      }).then(() => {
        this.loading = false
      })
    },
    isSpecialChar (word) {
      return dataUtil.isOrContainSpecialChar(word) !== null
    },
    chooseHelp () {
      introJs().start()
    }
  },
  mounted () {
  }
}
</script>

<style>
.introjs-tooltip {
  font-size: 16px!important;
}
</style>
