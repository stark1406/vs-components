import type { Align as AlignCard } from '@vs/card'
interface Card {
  title: string
  subtitle: string
  text: string
  footer: string
  'align-title'?: AlignCard
  'align-subtitle'?: AlignCard
  'align-text'?: AlignCard
  'align-footer'?: AlignCard
}

type Align =
  | 'title'
  | 'subtitle'
  | 'text'
  | 'footer'
  | 'align-title'
  | 'align-subtitle'
  | 'align-text'
  | 'align-footer'
export type CardAlign = Pick<Card, Align>

type Default = 'title' | 'subtitle' | 'text' | 'footer'
export type CardProps = Pick<Card, Default>
