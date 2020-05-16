import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locals/en'
import es from './locals/es'

Vue.use(VueI18n)

let lang = window.localStorage.getItem("lang");

if(!lang){
    lang = "en";
}

export default new VueI18n({
    locale: lang,
    messages: {
        en: {
            lang: en
        },
        es: {
            lang: es
        }
    }
})