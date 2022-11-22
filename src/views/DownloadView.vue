<template>
  <div class="grid place-content-center place-items-center h-screen">
    <div
      class="grid place-content-center place-items-center z-[40] text-center w-[95%] sm:w-[500px] xl:w-[450px]"
    >
      <img src="../assets/icon.png" class="w-20" alt="" />
      <p
        class="text-[#fafafa] font-extrabold text-4xl sm:text-5xl mt-8 w-[200px] sm:w-[300px]"
      >
        Volta for Desktop
      </p>
      <p class="font-normal text-[#d4d4d8] mt-8 text-lg lg:text-xl">
        Download the Volta desktop app for a faster experience with better
        notifications.
      </p>
      <div class="sm:flex items-center gap-2 mt-10">
        <button
          type="button"
          aria-label="download-button"
          class="bg-white rounded-lg shadow-xl px-4 py-2"
        >
          <a
            target="_blank"
            class="text-[#000000] text-sm font-medium flex items-center gap-2"
            src="https://volta-build.s3.fr-par.scw.cloud/Volta-1.3.1-universal.dmg"
          >
            <img src="../assets/apple-icon.svg" class="h-5" alt="" />
            <span>Download for Mac</span>
          </a>
        </button>
        <button
          type="button"
          aria-label="download-button"
          class="bg-white rounded-lg shadow-xl mt-4 sm:mt-0 px-4 py-2"
        >
          <a
            target="_blank"
            class="text-[#000000] text-sm font-medium flex gap-2"
            href="https://volta-build.s3.fr-par.scw.cloud/Volta%20Setup%201.3.1.exe"
          >
            <img src="../assets/windows-icon.svg" class="h-5" alt="" />
            <span>Download for Windows</span>
          </a>
        </button>
      </div>
    </div>
    <div
      class="absolute bg-gradient-to-tr from-[#1a62ff] to-pink-500 h-screen inset-0 transition-all blur-[112px] duration-[2000ms] z-[30] !opacity-60"
    ></div>
  </div>
</template>
