import { defineComponent, PropType } from 'vue'
import { Align } from './types'

export const CardContract = defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    footer: {
      type: String,
      default: '',
    },
    alignTitle: {
      type: String as PropType<Align>,
      default: 'none',
    },
    alignSubtitle: {
      type: String as PropType<Align>,
      default: 'none',
    },
    alignText: {
      type: String as PropType<Align>,
      default: 'none',
    },
    alignFooter: {
      type: String as PropType<Align>,
      default: 'none',
    },
  },
})
