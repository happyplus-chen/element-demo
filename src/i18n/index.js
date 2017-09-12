import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
    en: {
      message: {
        hello: 'hello world !!'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }
console.log("$t",Vue)
const i18n = new VueI18n({
    locale:'en',
    messages
})
// debugger
export default i18n