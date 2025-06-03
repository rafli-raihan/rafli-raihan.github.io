import { useRoute } from 'vue-router'
import { computed } from 'vue'

export function useIsOnRoot() {
  const route = useRoute()
  return computed<boolean>(() => route.path === '/')
}
