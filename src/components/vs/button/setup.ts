import { SetupContext } from 'vue'
import { ButtonProps } from './types'

export function useButton(props: ButtonProps, ctx: SetupContext) {
  function onClick() {
    ctx.emit('click')
  }

  return {
    onClick,
  }
}
