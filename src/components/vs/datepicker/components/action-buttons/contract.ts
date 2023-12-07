import { defineComponent } from 'vue'

export const ActionButtonsContract = defineComponent({
  props: {
    isToday: {
      type: Boolean,
      default: false,
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
    isClear: {
      type: Boolean,
      default: false,
    },
  },
})
