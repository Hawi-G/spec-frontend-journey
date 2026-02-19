import { ref } from 'vue'

export const useToggle = (initVal) => {
  const state = ref(initVal);
  const toggle = () => {
    state.value = !state.value;
  };
  return { state, toggle };
};
