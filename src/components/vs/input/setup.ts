import { ref, SetupContext, provide, watch } from 'vue'
import { CLEAR_INPUT_FROM_MAIN } from './injectKey'
import type { InputProps } from './types'

export function useInput(props: InputProps, ctx: SetupContext) {
  const valueInput = ref<string | number>(props.value)

  function setValue(value: string | number): void {
    valueInput.value = value
    ctx.emit('update:value', valueInput.value)
  }

  function clearInput(): void {
    valueInput.value = props.type === 'number' ? 0 : ''
    ctx.emit('update:value', valueInput.value)
  }

  provide(CLEAR_INPUT_FROM_MAIN, clearInput)

  watch(() => props.value, (value: string | number) => {
    setValue(value)
  })

  return {
    valueInput,
    events: {
      input: (e: Event): void => {
        const target = e.target as HTMLInputElement

        setValue(target.value)
      },
      focus: (e: FocusEvent): void => {
        ctx.emit('focus', e)
      },
      blur: (e: FocusEvent): void => {
        ctx.emit('blur', e)
      },
    }
  }
}
