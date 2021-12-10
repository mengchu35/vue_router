<template>
  <div>
    <p>Have fun!</p>
    <router-link to="/travels/rose">Rose</router-link> |
    <router-link to="/travels/hydrangea">Tydrangea</router-link> |
    <router-link to="/travels/tulipa">Tulipa</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Travels',
}
</script>
