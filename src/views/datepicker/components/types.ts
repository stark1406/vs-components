interface Date {
  'v-model:value': string,
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

export type DateInline = Pick<Date, "v-model:value" | "show-today-button" | "show-select-button" | "show-clear-button">
export type MonthInline = Pick<Date, "v-model:value" | "type">
export type YearInline = Pick<Date, "v-model:value" | "type">
export type TimeInline = Pick<Date, "v-model:value" | "show-select-button" | "type">