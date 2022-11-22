<template>
  <div class="backgrundGrey min-h-screen">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style>
.backgrundGrey {
  background-color: rgb(24 24 27);
}
</style>
