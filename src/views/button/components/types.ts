import { Color, Type, Size as ButtonSize } from '@vs/button/types'

interface Button {
  label: string
  color: Color
  'is-rounded': boolean
  'is-disabled': boolean
  type: Type
  name: string
  'is-outlined'?: boolean
  'is-icon': boolean
  'name-icon': string
  size?: ButtonSize
  '@click': string
}

export type Colors = Pick<Button, 'label' | 'color'>
export type Rounded = Pick<Button, 'label' | 'color' | 'is-rounded'>
export type Disabled = Pick<Button, 'label' | 'is-disabled'>
export type Outlined = Pick<Button, 'label' | 'color' | 'is-outlined'>
export type Icon = Pick<Button, 'name-icon' | 'color' | 'is-outlined'>
export type Size = Pick<Button, 'label' | 'size'>
export type Event = Pick<Button, 'label' | '@click'>
