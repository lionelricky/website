<template>
  <div id="app">
    <div id="nav" class="nav">

      <v-layout row>
        <v-flex xs6>
          <a href="http://www.rikmedia.ca"><img width="145" height="28" src="http://www.rikmedia.ca/images/logo.svg"></a>
        </v-flex>
        <v-flex xs6>
          <span>
              <router-link to="/" exact> <div v-if="languageMode"> À Propos</div><div v-else>About</div> </router-link> |
              <router-link to="/portfolio"> Portfolio </router-link> |
              <span v-if="languageMode"><a  target="_new" href="http://www.rikmedia.ca/CV_Rick_Kiriakidis_f.pdf"> Mon CV </a></span><span v-else><a target="_new" href="http://www.rikmedia.ca/CV_Rick_Kiriakidis.pdf"> Resume </a></span>
              <span v-if="languageMode"><a @click="toggle" href="#"> English </a></span><span v-else><a @click="toggle" href="#"> Français</a></span>
          </span>

          <span class="spanMenu" @click="hambMenu">
            <v-icon small>menu</v-icon>
          </span>
        </v-flex>
      </v-layout>
    </div>
    <div>
    <v-layout row>
        <transition name="slide-fade">
        <v-flex id="menuSmall" v-if="showMenu">
          <span>
              <router-link to="/" @click.native="hambMenu" exact> <div v-if="languageMode"> À Propos</div><div v-else>About</div> </router-link>
          </span>
          <span>
              <router-link to="/portfolio"  @click.native="hambMenu"> Portfolio </router-link>
          </span>
          <span v-if="languageMode">
            <a @click="hambMenu" target="_new" href="http://www.rikmedia.ca/CV_Rick_Kiriakidis_f.pdf"> Mon CV </a></span><span v-else><a @click="hambMenu" target="_new" href="http://www.rikmedia.ca/CV_Rick_Kiriakidis.pdf"> Resume </a>
          </span>
          <span v-if="languageMode">
            <a @click="toggle(); hambMenu();" href="#"> English </a></span><span v-else><a @click="toggle(); hambMenu();" href="#"> Français</a>
          </span>
        </v-flex>
        </transition>
      </v-layout>
    </div>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapGetters(['languageMode', 'showTheMenu'])
  },
  mounted () {
    this.fetchItems()
  },
  methods: {
    ...mapActions(['toggleLanguage', 'fetchItems']),
    toggle () {
      this.toggleLanguage()
    },
    hambMenu () {
      this.showMenu = !this.showMenu
    }
  }
}

</script>
