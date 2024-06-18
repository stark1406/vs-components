import { defineComponent, PropType } from 'vue'
import type { Variant, Type, DisplayFormat } from './types'
import { MainService } from './services'

const mainService = new MainService()

export const DatepickerContract = defineComponent({
  props: {
    value: {
      type: String,
      default: '',
    },
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
      default(rawProps: object) {
        return mainService.getDisplayFormat(rawProps.displayFormat, rawProps.type)
      }
    },
    updateValue: {
      type: Function,
      default: undefined,
    },
    showTodayButton: {
      type: Boolean,
      default: false,
    },
    showSelectButton: {
      type: Boolean,
      default: false,
    },
    showClearButton: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update:value',
  ]
})
