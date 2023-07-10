<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <div class="title">
    <section>
      <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="250" height="250" />
      <h1> {{ title }}</h1>
    </section>
  </div>
</template>

<style scoped>
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
  margin: auto;
}
</style>