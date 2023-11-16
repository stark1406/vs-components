
export type Variant = 'inline' | 'input'
export type Type = 'date' | 'datetime' | 'time' | 'year' | 'month'
export type DisplayFormat = 'DD/MM/YYYY' | 'DD/MM/YYYY/hh/mm' | 'hh/mm' | 'MM/YYYY' | 'YYYY'

export interface MonthItem {
  name: string;
  number: number;
  currentYear: boolean;
}
  
export type MonthMatrix = MonthItem[][]

export interface DateFormatOptions {
  year?: 'numeric';
  month?: 'numeric' | '2-digit';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  hour12?: boolean;
}

export type Datas = Date[][] | MonthMatrix | number[][] | undefined
export type Item = Date | MonthItem | number