export interface Popper {
  'v-model:visible': string
  ':target': string
  placement: string
  width: string
}

export type PopperPlacement = Pick<Popper, keyof Popper>
