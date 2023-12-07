import type { Item } from '../../types'

export abstract class DaysContract {
  abstract weekdays: string[]

  abstract getDays(date: Date): Date[][]

  abstract isDay(view: string, item?: Item): item is Date

  abstract isExcludedDay(item: Date, currentDate: Date): boolean

  abstract isCurrentDay(item: Date): boolean
}