import type { MonthMatrix, MonthItem, Item } from '../../types'

export abstract class MonthContract {
  abstract month: MonthMatrix

  abstract getMonth(): MonthMatrix

  abstract getHeaderToolbar(date: Date): string

  abstract isExcludedMonth(item: MonthItem): boolean

  abstract isMonth(view: string, item?: Item): item is MonthItem
}