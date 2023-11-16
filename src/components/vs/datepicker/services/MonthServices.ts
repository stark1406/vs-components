import type { MonthMatrix, MonthItem, Item } from '../types'

export default class MonthService {
  month: MonthMatrix = [
      [
        { name: 'январь', number: 0, currentYear: true },
        { name: 'февраль', number: 1, currentYear: true },
        { name: 'март', number: 2, currentYear: true },
        { name: 'апрель', number: 3, currentYear: true },
      ],
      [
        { name: 'май', number: 4, currentYear: true },
        { name: 'июнь', number: 5, currentYear: true },
        { name: 'июль', number: 6, currentYear: true },
        { name: 'август', number: 7, currentYear: true },
      ],
      [
        { name: 'сентябрь', number: 8, currentYear: true },
        { name: 'октябрь', number: 9, currentYear: true },
        { name: 'ноябрь', number: 10, currentYear: true },
        { name: 'декабрь', number: 11, currentYear: true },
      ],
      [
        { name: 'январь', number: 0, currentYear: false },
        { name: 'февраль', number: 1, currentYear: false },
        { name: 'март', number: 2, currentYear: false },
        { name: 'апрель', number: 3, currentYear: false },
      ],
    ]

  getMonth(): MonthMatrix {
    return this.month
  }

  getHeaderToolbar(date: Date): string {
    const year = date.getFullYear()

    return String(year)
  }
  
  isExcludedMonth(item: MonthItem): boolean {
    return item.currentYear
  }

  isMonth(view: string, item?: Item): item is MonthItem {
    if(item) {
      return view === 'month' && typeof item !== 'number' && 'name' in item && 'number' in item && 'currentYear' in item;
    }

    return view === 'month'
  }
}