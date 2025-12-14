export type Color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
export type Type = 'button' | 'submit' | 'reset'
export type Size = 'small' | 'medium' | 'large'

export interface ButtonProps {
  label: string
  color: Color
  isRounded: boolean
  isDisabled: boolean
  type: Type
  isOutlined: boolean
  nameIcon: string
  isRightIcon: boolean
  isIcon: boolean
  size: Size
}
