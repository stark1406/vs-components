export interface InputProps {
  value: string | number
  label: string
  name: string
  type: Type
  stylingMode: StylingMode
  placeholder: string
  width: string
  maxlength: number | string
  error: any[]
  isDisabled: boolean
  showClearButton: boolean
}

export type Type = 'text' | 'number' | 'password' | 'email'
export type StylingMode = 'default' | 'underlined'