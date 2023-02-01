import axios from "axios";
import store from "../index";
const url =
"https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=4p9dmAvtFv8IW0KL2eKc1Zxr1o6YzESf8WSpr3T3";

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
        const requests = data.data.near_earth_objects;
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
