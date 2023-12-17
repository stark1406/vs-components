import { expect, describe, it, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { VsButton } from '..'

describe('Button', async () => {
  let wrapper: any

  beforeEach(async () => {
    wrapper = mount(VsButton)
  })

  it('props: color', async () => {
    const colors: string[] = ['primary', 'secondary', 'success', 'info', 'warning', 'danger']

    for(let i = 0; i < colors.length; i++) {
      await wrapper.setProps({ color: colors[i] })

      expect(wrapper.props('color')).toBe(colors[i])

      const button = wrapper.find('button')

      expect(button.classes('vs-btn_' + colors[i])).toBe(true)
    }
  })

  it('props: label', async () => {
    const text: string = 'Label Test'

    expect(wrapper.props('label')).not.toBe(text)

    await wrapper.setProps({ label: text })

    expect(wrapper.props('label')).toBe(text)

    const button = wrapper.find('button')

    expect(button.text()).toBe(text)
  })

  it('props: isRounded', async () => {
    const isRounded: boolean = true

    await wrapper.setProps({ isRounded: isRounded })

    expect(wrapper.props('isRounded')).toBe(isRounded)

    const button = wrapper.find('button')

    expect(button.classes('vs-btn_rounded')).toBe(true)
  })

  it('props: isOutlined', async () => {
    const isOutlined: boolean = true

    await wrapper.setProps({ isOutlined: isOutlined })

    expect(wrapper.props('isOutlined')).toBe(isOutlined)

    const button = wrapper.find('button')

    expect(button.classes('vs-btn_outlined')).toBe(true)
  })

  it('props: type', async () => {
    const types: string[] = ['button', 'submit', 'reset']

    for(let i = 0; i < types.length; i++) {
      await wrapper.setProps({ type: types[i] })

      expect(wrapper.props('type')).toBe(types[i])

      const button = wrapper.find('button')

      expect(button.attributes('type')).toBe(types[i])
    }
  })

  it('props: size', async () => {
    const sizes: string[] = ['normal', 'large']

    for(let i = 0; i < sizes.length; i++) {
      await wrapper.setProps({ size: sizes[i] })

      expect(wrapper.props('size')).toBe(sizes[i])

      if(sizes[i] === 'large') {
        const button = wrapper.find('button')

        expect(button.classes('vs-btn_' + sizes[i])).toBe(true)
      }
    }
  })

  it('props: isDisabled', async () => {
    const isDisabled: boolean = true

    await wrapper.setProps({ isDisabled: isDisabled })

    expect(wrapper.props('isDisabled')).toBe(isDisabled)

    const button = wrapper.find('button')

    expect(button.attributes('disabled')).toBe('')
  })

  it('event click', async () => {
    await wrapper.trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})