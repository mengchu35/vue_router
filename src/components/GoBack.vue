<template>
  <div>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default{
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
  button {
    background-color: #834b00;
    color: white;
    border-radius: 5px 0 5px 0;
  }
</style>
