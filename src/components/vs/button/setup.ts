import { SetupContext } from 'vue'

export function useButton(props, ctx: SetupContext) {

  function clickOnButton() {
    ctx.emit('click')
  }

  return {
    clickOnButton
  }
}
