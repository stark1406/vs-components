import { defineComponent, PropType } from 'vue'
import type { color, type, size } from './types'

export const ButtonContract = defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String as PropType<color>,
      default: 'primary',
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<type>,
      default: 'button',
    },
    isOutlined: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<size>,
      default: 'normal'
    }
  },
  emits: ['click'],
})
