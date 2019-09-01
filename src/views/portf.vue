<template>
  <div id="content">
    <v-layout align-center justify-center row ma-4 id="web">
        <v-flex class="titled" style="padding-top: .5em;">
            <div class="titled" v-if="languageMode" v-text="portItems[$route.params.id-1].titf"></div>
            <div class="titled" v-else v-text="portItems[$route.params.id-1].tite"></div>
          <v-divider />
        </v-flex>
    </v-layout>

    <v-layout align-center justify-center row ma-2>

      <div v-if="portItems[$route.params.id-1]">
        <!--layout 2 -->
        <div v-if="portItems[$route.params.id-1]['template'] == 2">
          <div class="grid-container">
            <div v-for="(items, index) in portItems[$route.params.id-1].image" :key="index">
              <div class="grid-item"><img v-bind:src="'http://www.rikmedia.ca/images/'+ items.image "></div>
            </div>
          </div>
        </div>
        <!---layout 22 -->
        <div v-else-if="portItems[$route.params.id-1]['template'] == 22">
          <div>
              <img v-bind:src="'http://www.rikmedia.ca/images/'+ portItems[$route.params.id-1].image[0].image" class="oneCol">
          </div>
          <div>
              <img v-bind:src="'http://www.rikmedia.ca/images/'+ portItems[$route.params.id-1].image[1].image" class="oneCol">
          </div>
          <div class="grid-container">
            <div v-for="(items, index) in portItems[$route.params.id-1].image" :key="index" v-if="index > 1" class="grid-item">
              <img v-bind:src="'http://www.rikmedia.ca/images/'+ items.image ">
            </div>
          </div>
        </div>
        <!-- layout 12 --->
        <div v-else-if="portItems[$route.params.id-1]['template'] == 12">
          <div>
              <img v-bind:src="'http://www.rikmedia.ca/images/'+ portItems[$route.params.id-1].image[0].image" class="oneCol">
          </div>
          <div class="grid-container">
            <div v-for="(items, index) in portItems[$route.params.id-1].image" :key="index" v-if="index > 0" style="margin: 1em 0;">
              <div class="grid-item"><img v-bind:src="'http://www.rikmedia.ca/images/'+ items.image "></div>
            </div>
          </div>
        </div>
        <!--layout 1 --->
        <div v-else>
            <v-layout align-center justify-center row v-if="portItems[$route.params.id-1].cat == 3">
              <div style="display: block;">
                  <img v-bind:src="'http://www.rikmedia.ca/images/DIGI'+ portItems[$route.params.id-1].id + '.gif'">
              </div>
            </v-layout>
            <div v-for="(items, index) in portItems[$route.params.id-1].image" :key="index">
                <div><img v-bind:src="'http://www.rikmedia.ca/images/'+ items.image" class="oneCol" style="margin: 1em 0;"></div>
            </div>
            <!---ODESSEY-->
            <div v-if="$route.params.id == 6">
              <a class="backLink" href="http://www.rikmedia.ca/odyssey/"> CLICK HERE FOR A DEMO </a>
            </div>
            <!--- DIGITAL ART-->
            <v-layout align-center justify-center row v-if="portItems[$route.params.id-1].cat == 3">
              <v-flex class="mb-3">
                <a target="_new" v-bind:href="'http://www.rikmedia.ca/images/'+ portItems[$route.params.id-1].image[0].image" v-if="languageMode" class="backLink"> Cliquez ici pour agrandir l'image </a>
                <a target="_new" v-bind:href="'http://www.rikmedia.ca/images/'+ portItems[$route.params.id-1].image[0].image" v-else class="backLink"> click here for full image </a>
              </v-flex>
            </v-layout>
        </div>
        <v-divider />
        <router-link v-if="languageMode" v-bind:to="link+'#'+$route.params.catIdName" class="backLink"><v-icon small>arrow_back_ios</v-icon> Retour</router-link>
        <router-link v-else v-bind:to="link+'#'+$route.params.catIdName" class="backLink"><v-icon small>arrow_back_ios</v-icon> Back </router-link>
        <br />  <br />  <br />   <br />
      </div>

    </v-layout>
    <footerWeb />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import footerWeb from '@/components/footerWeb'

export default {
  name: 'portf',
  data () {
    return {
      link: '/portfolio'
    }
  },
  components: {
    footerWeb
  },
  computed: {
    ...mapGetters(['languageMode', 'portItems'])
  }
}
</script>
