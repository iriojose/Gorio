import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locals/en'
import es from './locals/es'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en',
    messages: {
        en: {
            lang: en
        },
        es: {
            lang: es
        }
    }
})