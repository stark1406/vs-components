import { PropType, defineComponent } from 'vue'
import type { Item } from './types'

export const SelectItemsObjectContract = defineComponent({
  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => []
    },
    value: {
      type: [String, Number] as PropType<string | number | null | undefined>,
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
