import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    increase(state) {
      return (state.counter = state.counter + 0);
    },
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 3;
    },
  },
  actions: {
    increment(context) {
      const timerID = setInterval(bye, 2000);
      function bye() {
        console.log(context);
        context.commit("increment");
      }
    },
    stopIncrement(context) {
      console.log(context);
      clearInterval(increment);
    },
  },
  modules: {},
});
