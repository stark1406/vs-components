import { ref } from 'vue'
import MainService from './services/MainServices'
import ToolbarServices from './services/ToolbarServices'
import DaysService from './services/DaysServices'
import MonthService from './services/MonthServices'
import YearService from './services/YearServices'
import type { Datas, Item, MonthItem } from './types'

export function useDatepicker(props) {
  const mainService = new MainService()
  const toolbarServices = new ToolbarServices()
  const daysService = new DaysService()
  const monthService = new MonthService()
  const yearService = new YearService()

  const type = ref<string>(props.type)
  const view = ref<string>('day')

  const selectedDate = ref<string>('')
  const currentDate = ref<Date>(getCurrentDate())

  const datas = ref<Datas>(getDatas(currentDate.value))

  const headerToolbar = ref<string>(getHeaderToolbar())

  function getCurrentDate(): Date {
    const date: Date = new Date()

    return date
  }

  function getDatas(value: Date): Date[][] | undefined {
    if(type.value === 'date') {
      return daysService.getDays(value)
    }
  }

  function getValue(item: Item) {
    if (daysService.isDay(view.value, item)) {
      return item.getDate()
    }
    if (monthService.isMonth(view.value, item)) {
      return item.name.substring(0, 3)
    }
    return item
  }

  function getHeaderToolbar(): string {
    if (daysService.isDay(view.value)) {
      return toolbarServices.getHeaderDay(currentDate.value)
    }
    
    if (monthService.isMonth(view.value)) {
      return toolbarServices.getHeaderMonth(currentDate.value)
    }

    if (yearService.isYear(view.value)) {
      if(datas.value) {
        return toolbarServices.getHeaderYear(datas.value)
      }
    }

    return ''
  }

  function getPreviousToolbar(): void {
    if (daysService.isDay(view.value)) {
      currentDate.value.setMonth(currentDate.value.getMonth() - 1)
      datas.value = daysService.getDays(currentDate.value)
    }

    if(monthService.isMonth(view.value)) {
      currentDate.value.setFullYear(currentDate.value.getFullYear() - 1)
      datas.value = monthService.getMonth()
    }

    if(yearService.isYear(view.value)) {
      const year: number = Number(headerToolbar.value.split(' ')[0]) - 1
      datas.value = yearService.getYearMatrix(year)
    }

    headerToolbar.value = getHeaderToolbar()
  }

  function getNextToolbar(): void {
    if (daysService.isDay(view.value)) {
      currentDate.value.setMonth(currentDate.value.getMonth() + 1)
      datas.value = daysService.getDays(currentDate.value)
    }

    if(monthService.isMonth(view.value)) {
      currentDate.value.setFullYear(currentDate.value.getFullYear() + 1)
      datas.value = monthService.getMonth()
    }

    if(yearService.isYear(view.value)) {
      const year: number = Number(headerToolbar.value.split(' ')[2]) + 5
      datas.value = yearService.getYearMatrix(year)
    }

    headerToolbar.value = getHeaderToolbar()
  }

  function selectedHeaderToolbar(): void {
    if (daysService.isDay(view.value)){
      datas.value = monthService.getMonth()
      view.value = 'month'
    } else if (monthService.isMonth(view.value)) {
      const year = Number(headerToolbar.value)
      datas.value = yearService.getYearMatrix(year)
      view.value = 'year' 
    }

    headerToolbar.value = getHeaderToolbar()
  }

  function isExcluded(item: Item): boolean {
    if (daysService.isDay(view.value, item)) {
      return daysService.isExcludedDay(item, currentDate.value)
    }

    if (monthService.isMonth(view.value, item)) {
      return monthService.isExcludedMonth(item)
    }

    if (yearService.isYear(view.value) && typeof item == 'number') {
      return yearService.isExcludedYear(item, headerToolbar.value)
      
    } 
    return true
  }

  function isCurrent(item: Item): boolean {
    if (daysService.isDay(view.value, item)) {
      return daysService.isCurrentDay(item)
    }
    return false
  }

  function isSelected(item: Item): boolean {
    if (daysService.isDay(view.value, item)) {
      const selectedItem = mainService.formatDate(item, props.displayFormat)
      
      return selectedItem === selectedDate.value
    }

    return false
  }

  function selectItem(item: Date | MonthItem | number): void {
    if (daysService.isDay(view.value, item)) {
      selectedDate.value = mainService.formatDate(item, props.displayFormat)
      props.updateValue(selectedDate.value)
    }

    if (monthService.isMonth(view.value, item)) {
      currentDate.value.setMonth(item.number)
      datas.value = daysService.getDays(currentDate.value)
      view.value = 'day'
    }

    if (yearService.isYear(view.value, item)) {
      currentDate.value.setFullYear(item)
      datas.value = monthService.getMonth()
      view.value = 'month'
    }

    headerToolbar.value = getHeaderToolbar()
  }

  return {
    headerToolbar,
    getPreviousToolbar,
    getNextToolbar,
    selectedHeaderToolbar,
    view,
    weekdays: daysService.weekdays,
    datas,
    getValue,
    isExcluded,
    isCurrent,
    isSelected,
    selectItem,
  }
}
