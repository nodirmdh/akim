import axios from "axios";
import store from "../index";
const url =
        "https://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "from=2023-01-14&" +
        "sortBy=popularity&" +
        "apiKey=a6ac34004ad844879ecb370fbb115b08";


export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequest(state, requests){
      state.requests = requests
      console.log(state.requests)
  },
  },
  actions: {
    async load({commit}) {
         try{
            const data = await axios.get(url)
            const requests = data.data.articles
            commit('setRequest', requests)
         }catch(e){
            console.log(e)
         }
    },
    async loadOne({ commit }, id) {
      try{
        const data = await axios.get(url)
        const requests = data.data.articles[id]
        commit('setRequest', requests)
     }catch(e){
        console.log(e)
     }
    },
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
};
