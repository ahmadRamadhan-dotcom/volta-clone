<template>
  <div id="sync_container" class="flex justify-center mt-14">
    <div
      id="sync_wrapper"
      class="bg-no-repeat bg-[url('/background.svg')] shadow-xl rounded-lg bg-[#27272a40] bg-cover bg-[center_bottom] flex justify-center w-11/12 lg:w-[94%] xl:w-[1220px] h-[20em] md:h-[18em] lg:h-[22em] xl:h-[28em]"
    >
      <div
        class="grid lg:grid-cols-2 w-full place-content-center place-items-center"
      >
        <div class="p-5 sm:p-14 lg:p-5 lg:w-11/12 xl:p-0 xl:w-3/4">
          <span
            class="text-[#fafafa] text-[30px] sm:text-[36px] xl:text-[37px] font-bold"
            >Always in sync</span
          >
          <p class="text-[#a1a1aa] font-normal mt-2 text-lg">
            Every action is synced between GitHub and Volta in real-time. Pull
            requests and the issues they close remain in sync - automatically.
          </p>
          <SyncButton />
        </div>
        <div class="hidden lg:block xl:w-[90%]">
          <img
            src="../../../assets/github-dark.svg"
            class="w-full"
            alt="github_dark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
