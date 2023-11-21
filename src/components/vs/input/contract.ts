import { PropType, defineComponent } from 'vue'
import { type, stylingMode} from './types'

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
      type: String as PropType<type>,
      default: 'text'
    },
    stylingMode: {
      type: String as PropType<stylingMode>,
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
  },
  emits: [
    'update:value'
  ]
})
