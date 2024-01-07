import { ref, SetupContext, onMounted, watchEffect } from 'vue'
import type { Item } from './types'

export function useSelect(props, ctx: SetupContext) {
  const isVisibleItemsObject = ref<boolean>(false)
  const keyValue = ref<string | number | null | undefined>(props.value)
  const valueInput = ref<string | number | null>(getValueInput())
  const refSelect = ref<HTMLElement | null>(null)
  const selectWidth = ref<string | undefined>(props.width)

  function getValueInput(): string | number | null {
    if(keyValue.value) {
      const item = props.items.find((item: Item) => item[props.keyExpr] === keyValue.value)
      return item[props.displayExpr]
    }

    return null
  }

  function clickClear(): void {
    if(props.displayExpr && props.keyExpr) {
      valueInput.value = null
      keyValue.value = null
    }

    ctx.emit('update:value', null)
    ctx.emit('changed:value', null)
  }

  function clickSelect(): void {
    isVisibleItemsObject.value = !isVisibleItemsObject.value
  }

  function changedValue(item: Item): void {
    if(props.displayExpr && props.keyExpr) {
      valueInput.value = item[props.displayExpr]
    }

    ctx.emit('update:value', item[props.keyExpr])
    ctx.emit('changed:value', item)
    isVisibleItemsObject.value = false
  }

  onMounted(() => {
    updateSelectWidth()
  })

  watchEffect(() => {
    window.addEventListener('resize', updateSelectWidth)
    return () => {
      window.removeEventListener('resize', updateSelectWidth)
    }
  })

  function updateSelectWidth(): void {
    if (refSelect.value) {
      selectWidth.value = `${refSelect.value.offsetWidth}px`
    }
  }

  return {
    isVisibleItemsObject,
    refSelect,
    clickClear,
    clickSelect,
    valueInput,
    changedValue,
    keyValue,
    selectWidth
  }
}
