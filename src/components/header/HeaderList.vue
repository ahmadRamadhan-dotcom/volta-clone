<template>
  <div
    id="list"
    class="order-first z-[999] lg:order-2 w-1/3 xl:w-1/3 grid xl:flex pl-4 xl:gap-10"
  >
    <MenuButton />
    <span
      :class="showList ? 'block' : 'hidden lg:flex'"
      class="grid gap-y-4 lg:gap-10"
    >
      <router-link
        v-for="(data, index) in listData"
        :key="index"
        :to="data.to"
        to="/changelog"
        active-class="active"
        exact-active-class="exact-active"
        class="u-text-gray-500 text-sm font-medium"
      >
        {{ data.name }}
      </router-link>
    </span>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHeaderStore } from "../../store/useHeaderStore";
const main = useHeaderStore();

const { showList } = storeToRefs(main);

const props = defineProps({
  listData: Array,
});
const openMenu = () => {
  showList.value = !showList.value;
};
</script>

<style scoped>
.u-text-gray-500 {
  color: rgb(161 161 170);
}

.active {
  color: #fafafa;
}
.u-text-gray-500:hover {
  color: #fafafa;
}
</style>
