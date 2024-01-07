import { SetupContext } from 'vue'
import type { Item } from './types'

export function useSelectItemsObject(props, ctx: SetupContext) {
  function selectItem(item: Item): void {
    ctx.emit('update:value', item[props.keyExpr])
    ctx.emit('changed:value', item)
  }

  function isSelected(item: Item): boolean {
    return item[props.keyExpr] === props.value
  }

  return {
    selectItem,
    isSelected
  }
}
