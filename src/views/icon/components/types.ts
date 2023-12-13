export interface Icons {
  name: string,
  text: string
}

interface Icon {
  name: string,
  width: string,
  height: string,
}

export type Default = Pick<Icon, keyof Icon>