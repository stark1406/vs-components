interface Select {
  'v-model:value': string,
  'label': string,
  ':items': string,
  'display-expr': string,
  'key-expr': string,
  ':show-clear-button': boolean,
  'width': string,
}

export type SelectItemsObject = Select

export interface ItemsObject {
  name: string;
  id: number;
}