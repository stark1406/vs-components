import type { DateFormatOptions, DisplayFormat } from '../types'

export default class MainService {
  formatDate(date: Date, displayFormat: DisplayFormat): string {
    if (!(date instanceof Date)) {
      date = new Date(date)
    }

    // if (isNaN(date.getTime())) {
    //   return date
    // }

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