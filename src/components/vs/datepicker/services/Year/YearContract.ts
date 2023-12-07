import type { Item } from '../../types'

export abstract class YearContract {
  abstract getYearMatrix(year: number): number[][]

  abstract isYear(view: string, item?: Item): item is number

  abstract isExcludedYear(item: number, headerToolbar: string): boolean
}