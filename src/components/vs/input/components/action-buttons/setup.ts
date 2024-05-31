import { inject } from 'vue'
import { CLEAR_INPUT_FROM_MAIN } from '../../injectKey'

export function useActionButtons() {
  const clear: (() => void) | undefined = inject(CLEAR_INPUT_FROM_MAIN)

  return {
    clear
  }
}
