<template>
  <div id="portNavigationBar">
      <div v-if="languageMode"><a href="#web" class="backLink"> Mobile et Web</a> | <a href="#print" class="backLink"> Imprimé </a> | <a href="#art" class="backLink"> Art Numérique </a></div>
      <div v-else ><a href="#web" class="backLink"> Mobile & Web</a> | <a href="#print" class="backLink"> Print</a> |  <a href="#art" class="backLink"> Digital Art</a></div>
      <!-- <v-divider /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'portfBar',
  computed: {
    ...mapGetters(['languageMode'])
  }
}
</script>
