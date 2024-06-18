import { h, SetupContext } from 'vue'
import DatepickerInline from './inline/datepiker-inline.vue'
import { DatepickerContract } from '../contract'
import type { DatePikerProps } from '../types'

export default {
  name: 'VsDatepicker',
  extends: DatepickerContract,
  setup(props: DatePikerProps, ctx: SetupContext) {
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