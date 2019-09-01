import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    language: false

  },
  mutations: {
    setItems (state, items) { return state.items = items },
    setLanguage (state, language) { return state.language = language }
  },
  getters: {
    languageMode (state) { return state.language },
    portItems (state) { return state.items },
    portWeb (state) { return state.items.filter(item => item.cat == 1) },
    portPrint (state) { return state.items.filter(item => item.cat == 2) },
    portArt (state) { return state.items.filter(item => item.cat == 3) }
  },
  actions: {
    fetchItems ({ commit }) {
      fetch('http://www.rikmedia.ca/portfolio.php', {
        method: 'get'
      })
        .then((data) => { return data.json() })
        .then((data) => {
          var temp2 = []
          var temp3 = []
          let idName = null
          data.forEach(element => {
            let count = element.imgnum
            let i = 0
            temp3 = []
            for (i = 0; i < count; i++) {
              temp3.push({ image: element.name + (i + 1) + '.jpg' })
            }
            if (element.cat == 1) {
              idName = 'web'
            } else if (element.cat == 2) {
              idName = 'print'
            } else {
              idName = 'art'
            }
            temp2.push({
              id: element.id,
              name: element.name,
              cat: element.cat,
              catIdName: idName,
              template: element.template,
              nameCat: element.nameCat,
              nameCatf: element.nameCatf.replace('&#233;', 'é'),
              tite: element.tite,
              titf: element.titf.replace(/&#233;/g, 'é'),
              image: temp3 })
          })
          commit('setItems', temp2)
        })
    },
    toggleLanguage ({ commit }) {
      this.language = !this.language
      commit('setLanguage', this.language)
    }
  }
})
