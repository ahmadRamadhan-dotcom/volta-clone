import { defineStore } from "pinia";

export const useHeaderStore = defineStore("main", {
  state: () => ({ showList: false }),
});
