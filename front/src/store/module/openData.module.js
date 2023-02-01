import axios from "axios";
import store from "../index";
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=6983fa64bae42b24e7d295643695f86b";
export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequest(state, requests) {
      state.requests = requests;
    },
  },
  actions: {
    async load({ commit }) {
      try {
        const data = await axios.get(url);
        const requests = data.data.results;
        console.log(requests)
        commit("setRequest", requests);
      } catch (e) {
        console.log(e);
      }
    },
    async loadOne({ commit }, id) {
      try {
        const data = await axios.get(url);
        const requests = data.data.articles[id];
        commit("setRequest", requests);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
};
