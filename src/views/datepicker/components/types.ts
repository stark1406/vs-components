interface Date {
  'model-value': string,
  variant: string,
  disabled: string,
  type: string,
  'display-format': string,
  name: string,
  '@update:value': string,
  'show-today-button': boolean,
  'show-select-button': boolean,
  'show-clear-button': boolean,
}

export type DateInline = Pick<Date, "model-value" | "show-today-button" | "show-select-button" | "show-clear-button" | "@update:value">