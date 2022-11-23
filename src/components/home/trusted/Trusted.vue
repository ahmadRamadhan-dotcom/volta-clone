<template>
  <div class="mx-auto mt-20 w-[94%] xl:w-[800px] z-[30]">
    <p class="text-[#fafafa] font-bold text-3xl text-center">
      Trusted by open-source communities
    </p>
    <div
      class="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 mt-10"
    >
      <img
        v-for="(data, index) in openSourceUse"
        :key="index"
        :src="data.image"
        class="w-12"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const openSourceUse = [
  { id: 1, image: "https://github.com/nuxt.png" },
  { id: 2, image: "https://github.com/vuejs.png" },
  { id: 3, image: "https://github.com/vueuse.png" },
  { id: 4, image: "https://github.com/vitejs.png" },
  { id: 5, image: "https://github.com/unjs.png" },
  { id: 6, image: "https://github.com/windicss.png" },
  { id: 7, image: "https://github.com/nuxtlabs.png" },
];
</script>
