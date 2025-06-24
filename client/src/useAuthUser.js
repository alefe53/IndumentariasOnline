import { ref } from 'vue';

const user = ref(null);

export function useAuthUser() {
  return { user };
}