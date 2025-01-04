import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const cart = ref(777);


  function qoshish(){
        cart.value++
  }

  return { cart, qoshish };
});
