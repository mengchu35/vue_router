<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/travels">Travels</router-link>
    </div>
    <GoBack/>
    <router-view/>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'

export default {
  components: {
    GoBack,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #aa5500;
}

#nav a.router-link-exact-active {
  color: #a79a00;
}
</style>
