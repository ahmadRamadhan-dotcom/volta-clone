<template>
  <div class="w-11/12 xl:w-[720px] mx-auto text-center mt-20">
    <span class="font-bold text-[#fafafa] text-3xl xl:text-4xl"
      >And more features
    </span>
    <p class="text-[#a1a1aa] font-normal text-xl mt-4">
      On top of a powerful inbox, issue boards and GitHub sync, Volta is built
      for speed to become your day-to-day ally. It is built with a set of
      features that will increase your productivity.
    </p>
  </div>
  <div
    class="w-11/12 xl:w-[1220px] grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto mt-10 z-[50]"
  >
    <div
      v-for="(feature, index) in features"
      :key="index"
      id="content_wrapper"
      class="xl:w-[600px] xl:h-[12.5em] bg-[#27272a40] shadow-xl rounded-lg ring-1 ring-grey-800"
    >
      <div class="lg:flex items-center p-5 lg:pl-10">
        <div>
          <p id="title" class="text-lg text-[#fafafa] font-medium">
            {{ feature.title }}
          </p>
          <p
            id="desc"
            class="text-[#a1a1aa] text-base font-normal xl:w-[300px]"
          >
            {{ feature.desc }}
          </p>
        </div>
        <img :src="feature.image" class="h-[180px]" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: "Shortcuts",
    desc: "Optimized for efficiency with keyboard shortcuts for everything",
    image: "https://volta.net/home/features/shortcuts-dark.svg",
  },
  {
    id: 2,
    title: "Light and dark",
    desc: "The application is available in both dark and light mode.",
    image: "https://volta.net/home/features/theme-dark.svg",
  },
  {
    id: 3,
    title: "Deskop app",
    desc: "Install Volta on your desktop for a native experience",
    image: "https://volta.net/home/features/desktop-dark.svg",
  },
  {
    id: 4,
    title: "Built for speed",
    desc: "Never hit refresh again, Volta is synced in real-time accross all users.",
    image: "https://volta.net/home/features/fast-dark.svg",
  },
];
</script>

<style scoped>
.ring-grey-800 {
  --tw-ring-color: rgb(39 39 42);
}
</style>
