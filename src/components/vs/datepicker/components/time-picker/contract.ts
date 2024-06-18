import { defineComponent } from 'vue'

export const TimePickerContract = defineComponent({
  props: {
    selectedOption: {
      type: String,
      default: 'time',
    },
    variant: {
      type: String,
      default: '',
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
    'update:selected-option',
  ]
})
