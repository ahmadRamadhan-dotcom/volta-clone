<template>
  <div class="backgroundGrey min-h-screen">
    <Header />
    <div :class="showList ? 'mt-32' : ''">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useHeaderStore } from "./store/useHeaderStore";

const main = useHeaderStore();

const { showList } = storeToRefs(main);
</script>
