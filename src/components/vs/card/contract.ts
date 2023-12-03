import { defineComponent } from 'vue'

export const CardContract = defineComponent({
  props: {
    title: {
      type: String,
      default: undefined
    },
    subtitle: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    footer: {
      type: String,
      default: undefined
    },
    isAlignCenter: {
      type: Boolean,
      default: false
    },
    isAlignRight: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: undefined
    },
    maxHeight: {
      type: String,
      default: undefined
    },
    minHeight: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    maxWidth: {
      type: String,
      default: undefined
    },
    minWidth: {
      type: String,
      default: undefined
    }
  },
})
