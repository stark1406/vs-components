import { PropType, defineComponent } from 'vue'
import type { Item, Value } from './types'

export const SelectItemsObjectContract = defineComponent({
  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => []
    },
    value: {
      type: [String, Number] as PropType<Value>,
      default: undefined
    },
    displayExpr: {
      type: String,
      default: ''
    },
    keyExpr: {
      type: String,
      default: ''
    }
  },
  emits: [
    'changed:value',
    'update:value'
  ]
})
