export abstract class ToolbarContract {
  abstract getHeaderDay(date: Date): string

  abstract getHeaderMonth(date: Date): string

  abstract getHeaderYear(datas: number[][]): string
}