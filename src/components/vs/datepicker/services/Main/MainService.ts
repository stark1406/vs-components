import { MainContract } from './MainContract'
import type { DateFormatOptions, DisplayFormat } from '../../types'

export default class MainService extends MainContract {
  formatDate(date: Date | string, displayFormat: DisplayFormat = 'DD/MM/YYYY'): Date | string {
    if (!(date instanceof Date)) {
      return this.getDate(date)
    }
    return this.getDateString(date, displayFormat)
  }

  private getDate(date: string): Date {
    const parts = date.split('.')
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    
    return new Date(year, month, day)
  }

  private getDateString(date: Date, displayFormat: DisplayFormat): string {
    if (!(date instanceof Date)) {
      date = new Date(date)
    }

    const options: DateFormatOptions = {}

    if (displayFormat.includes('YYYY')) {
      options.year = 'numeric'
    }
  
    if (displayFormat.includes('MM')) {
      options.month = '2-digit'
    }
  
    if (displayFormat.includes('DD')) {
      options.day = '2-digit'
    }
  
    if (displayFormat.includes('hh')) {
      options.hour = '2-digit'
      options.hour12 = false
    }
  
    if (displayFormat.includes('mm')) {
      options.minute = '2-digit'
    }
  
    if (displayFormat.includes('ss')) {
      options.second = '2-digit'
    }

    const dateFormatter = new Intl.DateTimeFormat('default', options)

    return dateFormatter.format(date)
  }
}