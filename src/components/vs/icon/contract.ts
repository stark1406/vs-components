import { defineComponent, PropType } from 'vue'
import { Size } from './types'

export const IconContract = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: 'fit-content',
    },
    width: {
      type: String,
      default: 'fit-content',
    },
    color: {
      type: String,
      default: undefined,
    },
    hoverColor: {
      type: String,
      default: undefined,
    },
    size: {
      type: String as PropType<Size>,
      default: 'custom',
    },
  },
})
