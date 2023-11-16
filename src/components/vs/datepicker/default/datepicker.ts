import { h } from 'vue'
import DatepickerInline from './inline/datepiker-inline.vue'
import { DatepickerContract } from '../contract'

export default {
  name: 'VsDatepicker',
  extends: DatepickerContract,
  setup(props, ctx) {
    const variants = new Map([
      ['inline', DatepickerInline],
    ])

    const component: any = variants.get(props.variant)

    return () => h(component, {
      ...props,
      updateValue: (value: string) => ctx.emit('update:value', value)
    })
  },
}