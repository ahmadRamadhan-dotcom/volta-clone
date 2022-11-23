<template>
  <div
    id="main_container"
    class="min-h-[calc(100vh-4rem)] relative lg:min-h-[calc(100vh-5rem)] flex flex-col"
  >
    <BannerHero />
    <Main />
    <AlwaysSync />
    <PowerfullCommand />
    <MoreFeature />
    <Trusted />
    <Startnow />
    <div
      class="absolute overlay -bottom-[166px] md:-bottom-[120px] w-full h-[calc(100vh*2)] z-[10]"
    ></div>
  </div>
</template>

<style scoped>
.overlay {
  background: linear-gradient(
      38.73deg,
      rgba(26, 98, 255, 0.5),
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(236, 72, 153, 0.5));
}
</style>
