import { PropType, defineComponent } from 'vue'
import type { Type, StylingMode } from './types'

export const InputContract = defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<Type>,
      default: 'text'
    },
    stylingMode: {
      type: String as PropType<StylingMode>,
      default: 'default'
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    maxlength: {
      type: [Number, String],
      default: undefined,
    },
    error: {
      type: Array,
      default: () => ([])
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    showClearButton: {
      type: Boolean,
      default: false
    },
  },
  emits: [
    'update:value',
    'focus',
    'blur'
  ]
})
