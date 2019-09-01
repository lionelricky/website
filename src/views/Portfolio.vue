
<template>
  <div id="content">

      <v-layout align-center justify-center row>
      <div class="subMenuBar ">
        <div class="subMenuin" v-if="languageMode"><a href="#web">Programmation, <span v-if="portWeb[0]" v-text="portWeb[0].nameCatf"></span></a></div>
        <div class="subMenuin" v-else><a href="#web">Programing, <span v-if="portWeb[0]" v-text="portWeb[0].nameCat"></span></a></div> |
        <div class="subMenuin" v-if="languageMode"><a href="#print"> <span v-if="portWeb[0]" v-text="portPrint[0].nameCatf"></span></a></div>
        <div class="subMenuin" v-else><a href="#print"><span v-if="portWeb[0]" v-text="portPrint[0].nameCat"></span></a></div> |
        <div class="subMenuin" v-if="languageMode"><a href="#art"> <span v-if="portWeb[0]" v-text="portArt[0].nameCatf"></span></a></div>
        <div class="subMenuin" v-else><a href="#art"><span v-if="portWeb[0]" v-text="portArt[0].nameCat"></span></a></div>
      </div>

      <div class="subMenuBarSm">
          <div class="submenusm">
          <a href="#web" class="subButton"><v-icon small>important_devices</v-icon></a> |
          <a href="#print" class="subButton"><v-icon small>print</v-icon> </a> |
          <a href="#art" class="subButton"><v-icon small>brush</v-icon> </a></div>
      </div>
      </v-layout>
      <v-flex>
          <v-divider />
      </v-flex>
      <v-layout align-center justify-center row ma-4 id="web">
          <v-flex class="titled" v-if="languageMode">
            <span class="titled" >Programmation</span>
            <v-divider />
          </v-flex>
          <v-flex v-else class="titled">
              <span class="titled" >Programing</span>
              <v-divider />
            </v-flex>
      </v-layout>
      <!-- <v-layout align-center justify-center row ma-4> -->
        <!-- <div v-if="languageMode" class="oneProg">
          <strong><v-icon small>code</v-icon> TIC TAC TOE avec VUE JS</strong> > <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe_vs/index.html">VS Ordinateur</a> | <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe/index.html">VS Joueur</a><br />
            <strong><v-icon small>build</v-icon> </strong> <a target=_new  class="backLink" href="https://github.com/lionelricky/tictactoe/blob/master/tictactoe.vue"> GIT Repo</a>
        </div>
        <div v-else class="oneProg">
            <strong><v-icon small>code</v-icon> TIC TAC TOE in VUE JS</strong> > <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe_vs/index.html">VS Computer</a> | <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe/index.html">VS Player</a><br />
            <strong><v-icon small>build</v-icon> </strong> <a target=_new  class="backLink" href="https://github.com/lionelricky/tictactoe/blob/master/tictactoe.vue"> GIT Repo</a>
          </div> -->
          <div class="oneProg">
          <v-layout align-center justify-center row wrap ma-1>
            <v-flex md6 sm12 my-2>
                <div v-if="languageMode">
                    <strong><v-icon small>code</v-icon> TIC TAC TOE avec VUE JS</strong> > <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe_vs/index.html">VS Ordinateur</a> | <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe/index.html">VS Joueur</a><br />
                      <strong><v-icon small>build</v-icon> </strong> <a target=_new  class="backLink" href="https://github.com/lionelricky/tictactoe/blob/master/tictactoe.vue"> GIT Repo</a>
                  </div>
                  <div v-else>
                      <strong><v-icon small>code</v-icon> TIC TAC TOE with VUE JS</strong> > <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe_vs/index.html">VS Computer</a> | <a target=_new  class="backLink" href="http://www.rikmedia.ca/tictactoe/index.html">VS Player</a><br />
                      <strong><v-icon small>build</v-icon> </strong> <a target=_new  class="backLink" href="https://github.com/lionelricky/tictactoe/blob/master/tictactoe.vue"> GIT Repo</a>
                    </div>
            </v-flex>
            <v-flex md6 sm12 my-2 class="smallPad">
                <div v-if="languageMode">
                    <strong><v-icon small>code</v-icon> VIDEO POKER avec VUE JS</strong> > <a target=_new  class="backLink" href="http://www.rikmedia.ca/poker/index.html">Cliquez ici</a><br />
                      <strong><v-icon small>build</v-icon> </strong> <a target=_new  class="backLink" href="https://github.com/lionelricky/vidPoker"> GIT Repo</a>
                  </div>
                  <div v-else>
                      <strong><v-icon small>code</v-icon> VIDEO POKER with VUE JS</strong> > <a target=_new  class="backLink" href="http://www.rikmedia.ca/poker/index.html">Click here</a><br />
                      <strong><v-icon small>build</v-icon> </strong> <a target=_new  class="backLink" href="https://github.com/lionelricky/vidPoker"> GIT Repo</a>
                    </div>
            </v-flex>

          </v-layout>
        </div>
<!-- 
    </v-layout> -->
      <!---WEB-->
      
      <v-layout align-center justify-center row ma-4>
          <v-flex class="titled" v-if="languageMode">
            <span class="titled" v-if="portWeb[0]" v-text="portWeb[0].nameCatf"></span>
            <v-divider />
          </v-flex>
          <v-flex v-else class="titled">
              <span class="titled" v-if="portWeb[0]" v-text="portWeb[0].nameCat"></span>
              <v-divider />
            </v-flex>
      </v-layout>
      <v-layout align-center justify-center row ma-4>
        <div class="grid-container">

          <div v-scroll-reveal="{ delay: 350 }" v-for="(items, index) in portWeb" :key="index" class="grid-item">
            <router-link exact :to="`portfolio/${items.catIdName}/${items.id}`" >
              <img v-bind:src="'http://www.rikmedia.ca/images/'+items.name+'.jpg'">
            </router-link>
          </div>

        </div>
    </v-layout>
    <v-layout align-center justify-center row ma-4 id="print">
      <portNavigationBar />
    </v-layout>
  
    <!----PRINT -->
    <v-layout align-center justify-center row ma-4>
        <v-flex v-if="languageMode" class="titled">
          <span class="titled" v-if="portPrint[0]" v-text="portPrint[0].nameCatf"></span>
          <v-divider />
        </v-flex>
        <v-flex v-else class="titled">
            <span class="titled" v-if="portPrint[0]" v-text="portPrint[0].nameCat"></span>
            <v-divider />
          </v-flex>
    </v-layout>
    <v-layout align-center justify-center row ma-4>
      <div class="grid-container">
        <div v-scroll-reveal="{ delay: 350 }" v-for="(items, index) in portPrint" :key="index" class="grid-item">
          <router-link exact :to="`portfolio/${items.catIdName}/${items.id}`" >
            <img v-bind:src="'http://www.rikmedia.ca/images/'+items.name+'.jpg'">
          </router-link>
        </div>
      </div>
  </v-layout>
  <v-layout align-center justify-center row ma-4 id="art">
      <portNavigationBar />
    </v-layout>
  <!----ART -->
  <v-layout align-center justify-center row ma-4>
      <v-flex v-if="languageMode" class="titled">
        <span class="titled" v-if="portArt[0]" v-text="portArt[0].nameCatf"></span>
        <v-divider />
      </v-flex>
      <v-flex v-else class="titled">
          <span class="titled" v-if="portArt[0]" v-text="portArt[0].nameCat"></span>
          <v-divider />
        </v-flex>
  </v-layout>
  <v-layout align-center justify-center row ma-4>
    <div class="grid-container">
      <div v-scroll-reveal="{ delay: 350 }" v-for="(items, index) in portArt" :key="index" class="grid-item">
        <router-link exact :to="`portfolio/${items.catIdName}/${items.id}`" >
          <img v-bind:src="'http://www.rikmedia.ca/images/'+items.name+'.jpg'">
        </router-link>
      </div>
    </div>
</v-layout>

<!--end --->
  <v-layout align-center justify-center row ma-4>
    <portNavigationBar />
  </v-layout>
    <footerWeb />
    <br />   <br />
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import footerWeb from '@/components/footerWeb'
import portNavigationBar from '@/components/portNavigationBar'

export default {
  name: 'portfolio',
  components: {
    footerWeb,
    portNavigationBar
  },
  computed: {
    ...mapGetters(['languageMode', 'portWeb', 'portPrint', 'portArt'])
  }
}

</script>
