import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/style.min.css'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'
import Paginate from 'vuejs-paginate-next'

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).component('Paginate',Paginate).use(store).use(router).use(i18n).mount('#app')
