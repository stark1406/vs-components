export type Align = 'none' | 'center' | 'right'

export interface CardProps {
  title: string
  subtitle: string
  text: string
  footer: string
  alignTitle: Align
  alignSubtitle: Align
  alignText: Align
  alignFooter: Align
}
