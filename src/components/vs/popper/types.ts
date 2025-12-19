import { ComponentPublicInstance } from 'vue'

export type Target = HTMLElement | ComponentPublicInstance | null
export type Placement = 'bottom' | 'top' | 'left' | 'right'

export interface PopperProps {
  visible: boolean
  target: Target
  placement: Placement
  width: string
}
