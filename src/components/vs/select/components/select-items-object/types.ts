export interface Item {
  [key: string]: any;
}

export type Value = string | number | null | undefined
export interface SelectItemsObjectProps {
  items: Item[]
  value: Value
  displayExpr: string
  keyExpr: string
}