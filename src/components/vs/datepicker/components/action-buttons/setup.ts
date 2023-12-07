import { inject } from 'vue'
import { TODAY_FROM_MAIN, SELECT_DATE_FROM_MAIN, CLEAR_DATE_FROM_MAIN } from '../../injectKey'

export function useActionButtons() {
  const today: (() => void) | undefined = inject(TODAY_FROM_MAIN)
  const select: (() => void) | undefined = inject(SELECT_DATE_FROM_MAIN)
  const clear: (() => void) | undefined = inject(CLEAR_DATE_FROM_MAIN)

  return {
    today,
    currentDay: new Date().toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }),
    select,
    clear
  }
}
