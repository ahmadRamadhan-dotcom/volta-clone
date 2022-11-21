<template>
  <div
    id="list"
    class="order-first lg:order-2 w-1/3 xl:w-1/3 grid xl:flex pl-4 xl:gap-10"
  >
    <MenuButton :open-menu="openMenu" :show-menu="showMenu" />
    <span
      :class="openMenu ? 'block' : 'hidden lg:flex'"
      class="grid gap-y-4 lg:gap-10"
    >
      <router-link
        v-for="(data, index) in listData"
        :key="index"
        :to="data.to"
        to="/changelog"
        class="text-gray-500 hover:text-[#fafafa] text-sm font-medium"
      >
        {{ data.name }}
      </router-link>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  listData: Array,
});

const openMenu = ref(false);

const showMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>
