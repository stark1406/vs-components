interface Card {
  title: string,
  subtitle: string,
  text: string,
  footer: string,
  'is-align-center'?: boolean,
  'is-align-right'?: boolean,
  height: string,
  'max-height': string,
  'min-height': string,
  width: string,
  'max-width': string,
  'min-width': string,
}

type Align = 'title' | 'subtitle' | 'text' | 'footer' | 'is-align-center' | 'is-align-right'
export type CardAlign = Pick<Card, Align>

type Props = 'title' | 'subtitle' | 'text' | 'footer' | 'max-width'
export type CardProps = Pick<Card, Props>