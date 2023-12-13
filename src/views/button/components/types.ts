import { color, type, size } from '@vs/button/types'

interface Button {
  label: string,
  color: color,
  'is-rounded': boolean,
  'is-disabled': boolean,
  type: type,
  name: string,
  'is-outlined'?: boolean,
  icon: string,
  size?: size,
  '@click': string,
}

export type Colors = Pick<Button, 'label' | 'color'>
export type Rounded = Pick<Button, 'label' | 'color' | 'is-rounded'>
export type Disabled = Pick<Button, 'label' | 'is-disabled'>
export type Outlined = Pick<Button, 'label' | 'color' | 'is-outlined'>
export type Icon = Pick<Button, 'icon' | 'color' | 'is-outlined'>
export type Size = Pick<Button, 'label' | 'size'>
export type Event = Pick<Button, 'label' | '@click'>