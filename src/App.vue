<template>
  <div>
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view></router-view>
    <base-counter></base-counter>
  </div>
</template>
<script>
import BaseCounter from "./components/BaseCounter";
export default {
  components: {
    BaseCounter,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
