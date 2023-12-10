interface Input {
  'v-model:value': string,
  label: string,
  name: string,
  type: string,
  'styling-mode': string,
  width: string,
  placeholder: string,
}

export type InputDefault = Omit<Input, "type" | "styling-mode">
export type InputUnderlined = Omit<Input, "placeholder">
export type InputNumber = Omit<Input, "placeholder" | "styling-mode">