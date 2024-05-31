interface Input {
  'v-model:value': string,
  label: string,
  name: string,
  type: string,
  'styling-mode': string,
  width: string,
  placeholder: string,
  'show-clear-button': boolean
}

export type InputDefault = Omit<Input, "type" | "styling-mode">
export type InputUnderlined = Omit<Input, "placeholder" | "show-clear-button">
export type InputNumber = Omit<Input, "placeholder" | "styling-mode" | "show-clear-button">