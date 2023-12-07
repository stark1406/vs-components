import { ref, provide } from 'vue'
import { DaysService, MainService, MonthService, ToolbarService, YearService } from './services'
import { TODAY_FROM_MAIN, SELECT_DATE_FROM_MAIN, CLEAR_DATE_FROM_MAIN } from './injectKey'
import type { Datas, Item, MonthItem } from './types'

export function useDatepicker(props) {
  const mainService = new MainService()
  const toolbarServices = new ToolbarService()
  const daysService = new DaysService()
  const monthService = new MonthService()
  const yearService = new YearService()

  const type = ref<string>(props.type)
  const view = ref<string>('day')

  const selectedDate = ref<string>(props.modelValue)
  const currentDate = ref<Date>(getCurrentDate())

  const datas = ref<Datas>(getDatas(currentDate.value))

  const headerToolbar = ref<string>(getHeaderToolbar())

  function getCurrentDate(): Date {
    let date: Date = new Date()

    if(props.modelValue) {
      const formattedDate = mainService.formatDate(props.modelValue)
      if(formattedDate instanceof Date) {
        date = formattedDate
      }
    }
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
      const formattedDate = mainService.formatDate(item, props.displayFormat)
      if(typeof formattedDate === 'string') {
        selectedDate.value = formattedDate
        if(!props.showSelectButton) {
          selectDate()
        }
      }
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

  function today(): void {
    view.value = 'day'
    currentDate.value = new Date()
    datas.value = daysService.getDays(currentDate.value)
    headerToolbar.value = getHeaderToolbar()
  }

  provide(TODAY_FROM_MAIN, today)

  function selectDate(): void {
    props.updateValue(selectedDate.value)
  }

  provide(SELECT_DATE_FROM_MAIN, selectDate)

  function clearDate(): void {
    today()
    selectedDate.value = ''
    selectDate()
  }

  provide(CLEAR_DATE_FROM_MAIN, clearDate)

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
