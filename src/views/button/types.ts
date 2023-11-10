import { color, size } from '@/components/vs/button/types'

export interface Template {
  header: string,
  items: Items[]
}

interface Items {
  label?: string,
  color?: color,
  isRounded?: boolean,
  isDisabled?: boolean,
  isOutlined?: boolean,
  icon?: string,
  size?: size,
  click?: () => void,
}