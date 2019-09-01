<template>
    <v-footer id="foot" class="grey darken-3">
        <v-layout row wrap>
          <v-flex xs6 md6 align-left>
            <span class="aleft"><a href="mailto:rick.kiriakidis@gmail.com"><v-icon small dark>email</v-icon> rick.kiriakidis@gmail.com</a> | <a herf="skype+15149412851?call"><v-icon small dark>phone</v-icon> 514.941.2851</a></span>
            <span class="aleftSm"><a href="mailto:rick.kiriakidis@gmail.com"><v-icon small dark>email</v-icon></a> | <a herf="skype+15149412851?call"><v-icon small dark>phone</v-icon></a></span>
          </v-flex>
          <v-flex md6 xs6 align-right>
            <div class="white--text ml-3">
              <span>
             <div class="smPowered" v-if="languageMode">Réalisé avec:</div><div class="smPowered" v-else>Powered by:</div> &nbsp;
             <a class="white--text" href="https://vuejs.org" target="_blank">
             <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#FFFFFF" d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z" />
            </svg></a>

            &nbsp; | &nbsp;

            <a class="white--text" href="https://vuetifyjs.com" target="_blank">
              <svg style="width:27px;height:27px;padding-top:1px;" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z" />
              </svg>
            </a>
          </span>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['languageMode'])
  }
}
</script>
