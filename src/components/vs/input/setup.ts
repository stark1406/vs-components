import { SetupContext } from 'vue'

export function useInput(props, ctx: SetupContext) {

  function updateValue(e): void {
    const value = e.target.value
    ctx.emit('update:value', value)
  }

  return {
    updateValue,
  }
}
