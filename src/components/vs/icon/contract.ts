import { defineComponent } from 'vue'

export const IconContract = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: '15px'
    },
    width: {
      type: String,
      default: '15px'
    },
    color: {
      type: String,
      default: undefined
    },
    hoverColor: {
      type: String,
      default: undefined
    },
  },
})
