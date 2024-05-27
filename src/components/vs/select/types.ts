export interface Item {
  [key: string]: any;
}

export type Value = string | number | null | undefined

export interface SelectProps {
  label: string
  items: Item[]
  value: Value
  width: string
  displayExpr: string
  keyExpr: string
  showClearButton: boolean
  showDropDownButton: boolean
  isDisabled: boolean
}