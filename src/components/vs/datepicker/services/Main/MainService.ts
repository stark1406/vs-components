import { MainContract } from './MainContract'
import type { DateFormatOptions, DisplayFormat } from '../../types'

export default class MainService extends MainContract {
  formatDate(date: Date | string, displayFormat: DisplayFormat = 'DD/MM/YYYY', view: string = 'day'): Date | string {
    if (!(date instanceof Date)) {
      return this.getDate(date, view)
    }
    return this.getDateString(date, displayFormat)
  }

  private getDate(date: string, view: string): Date {
    const parts = date.split('.')
    const dates = parts.map((part, index) => {
      if(view === 'day') {
        return index === 1 ? parseInt(part, 10) - 1 : parseInt(part, 10)
      }

      if(view === 'month') {
        return index === 0 ? parseInt(part, 10) - 1 : parseInt(part, 10)
      }

      return index === 1 ? parseInt(part, 10) - 1 : parseInt(part, 10)
    })

    if(view === 'day') {
      const [day, month, year] = dates
      return new Date(year, month, day)
    }

    if(view === 'month') {
      const [month, year] = dates
      return new Date(year, month)
    }

    const [year] = dates

    return new Date(year, 0)
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

  getDisplayFormat(displayFormat: DisplayFormat,type: string): string {
    if(displayFormat) {
      return displayFormat
    }

    const types = new Map([
      ['date', 'DD/MM/YYYY'],
      ['month', 'MM/YYYY'],
      ['year', 'YYYY'],
      ['datetime', 'DD/MM/YYYY/hh/mm'],
      ['time', 'hh/mm'],
    ])

    const format: string = types.get(type) || 'DD/MM/YYYY'

    return format
  }
}