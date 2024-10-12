<template>
  <div>
    <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView , RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
