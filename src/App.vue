<template>
  <div id="app">
    <v-app id="inspire">
      <!-- <Navbar/> -->
      <v-content>
        <router-view/>
      </v-content>
      <!-- <Footer/> -->
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  name: 'App'
}
</script>

<style>

</style>
