import type { Item } from '../types'

export default class DaysServices {
  weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  getDays(date: Date): Date[][] {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDayOfMonth = new Date(year, month, 1)
    const startDate = new Date(firstDayOfMonth)
  
    while (startDate.getDay() !== 1) {
      startDate.setDate(startDate.getDate() - 1)
    }
  
    const calendarDates: Date[][] = []
    const numberWeekdays = 7

    for (let i = 0; i < 6; i++) {
      const week: Date[] = []
  
      for (let j = 0; j < numberWeekdays; j++) {
        week.push(new Date(startDate))
        startDate.setDate(startDate.getDate() + 1)
      }
  
      calendarDates.push(week)
    }
  
    return calendarDates
  }

  isDay(view: string, item?: Item): item is Date {
    if(item) {
      return view === 'day' && item instanceof Date
    }

    return view === 'day'
  }

  isExcludedDay(item: Date, currentDate: Date): boolean {
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    return item.getFullYear() === year 
      && item.getMonth() === month
  }

  isCurrentDay(item: Date): boolean {
    if (item.getMonth() === new Date().getMonth()) {
      return item.getDate() === new Date().getDate()
    }

    return false
  }
}