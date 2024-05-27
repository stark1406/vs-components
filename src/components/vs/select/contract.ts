import { PropType, defineComponent } from 'vue'
import type { Item, Value } from './types'

export const SelectContract = defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array as PropType<Item[]>,
      default: () => []
    },
    value: {
      type: [String, Number] as PropType<Value>,
      default: undefined
    },
    width: {
      type: String,
      default: '100%'
    },
    displayExpr: {
      type: String,
      default: undefined
    },
    keyExpr: {
      type: String,
      default: undefined
    },
    showClearButton: {
      type: Boolean,
      default: false
    },
    showDropDownButton: {
      type: Boolean,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'changed:value',
    'update:value'
  ]
})
