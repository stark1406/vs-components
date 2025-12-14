import { defineComponent, PropType } from 'vue'
import type { Color, Type, Size } from './types'

export const ButtonContract = defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String as PropType<Color>,
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
      type: String as PropType<Type>,
      default: 'button',
    },
    isOutlined: {
      type: Boolean,
      default: false,
    },
    nameIcon: {
      type: String,
      default: '',
    },
    isRightIcon: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium',
    },
  },
  emits: ['click'],
})
