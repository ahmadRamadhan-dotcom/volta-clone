<template>
  <button
    type="button"
    :class="showList ? 'mt-32' : 'mt-10'"
    class="text-[#fafafa] -translate-y-5 w-10 lg:hidden"
    @click="openMenu"
  >
    <span :class="showList ? 'hidden' : 'block'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="flex-shrink-0 h-5 w-5"
        style=""
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 1 0 0 1.5h12.5a.75.75 0 1 0 0-1.5H1.75z"
        ></path>
      </svg>
    </span>
    <span :class="showList ? 'block' : 'hidden'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="flex-shrink-0 h-5 w-5"
        style=""
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.75.75 0 1 1 1.06 1.06L13.06 12l5.22 5.22a.75.75 0 1 1-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 0 1-1.06-1.06L10.94 12L5.72 6.78a.75.75 0 0 1 0-1.06z"
        ></path>
      </svg>
    </span>
  </button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHeaderStore } from "../../store/useHeaderStore";
const main = useHeaderStore();

const { showList } = storeToRefs(main);

const openMenu = () => {
  showList.value = !showList.value;
};
</script>
