<template>
  <div class="m-home">
<v-container fluid>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <Form/>
    </v-flex>
  </v-layout>
  <v-layout mt-3 align-center justify-center>
    <v-flex xs12 sm8 md12>
      <Panel/>
    </v-flex>
  </v-layout>
</v-container>

  </div>
</template>

<script>
import Form from '@/components/form/Form'
import Panel from '@/components/panel/Panel'
export default {
  components: {
    Form,
    Panel
  },
  name: 'HomePage',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
