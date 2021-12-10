<template>
  <div>
    <p><b>The greatness of photography is to fix the moment into eternity.</b></p>
    <div class="travel-router">
      <router-link to="/travels/rose">Rose</router-link> |
      <router-link to="/travels/hydrangea">Hydrangea</router-link> |
      <router-link to="/travels/tulipa">Tulipa</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Travels',
}
</script>

<style scoped>
  .travel-router {
    background-color: #d7edff;
    width: 50%;
    margin: auto;
  }

  .travel-router a {
    font-weight: bold;
    color: black;
  }

  .travel-router a.router-link-exact-active {
    color: gray;
  }
</style>
