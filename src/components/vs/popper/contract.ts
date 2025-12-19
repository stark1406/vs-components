import { PropType, defineComponent } from 'vue'
import { Placement, Target } from './types'

export const PopperContract = defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    target: {
      type: [Object, null] as PropType<Target>,
      required: true,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    width: {
      type: String,
      default: 'fit-content',
    },
  },
  emits: ['update:visible'],
})
