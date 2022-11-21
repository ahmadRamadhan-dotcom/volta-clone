import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
