import { createStore } from 'vuex'
import news from './module/news.module'
import openData from './module/openData.module'
import documents from './module/documents.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    news,openData,documents
  }
})
