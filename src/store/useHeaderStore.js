import { defineStore } from "pinia";

const useHeaderStore = defineStore("main", {
  state: () => ({ showList: false }),
});

export default useHeaderStore;
