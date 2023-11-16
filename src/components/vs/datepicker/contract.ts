import { defineComponent, PropType } from 'vue'
import type { Variant, Type, DisplayFormat } from './types'

export const DatepickerContract = defineComponent({
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'inline',
    },
    type: {
      type: String as PropType<Type>,
      default: 'date',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    displayFormat: {
      type: String as PropType<DisplayFormat>,
      default: 'DD/MM/YYYY',
    },
    updateValue: {
      type: Function,
      default: undefined,
    },
  },
  
})
