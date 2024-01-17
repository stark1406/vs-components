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

  const type: string = props.type
  const view = ref<string>(getView())

  const selectedDate = ref<string>(props.value)
  const currentDate = ref<Date>(getCurrentDate())

  const datas = ref<Datas>(getDatas(currentDate.value))

  const headerToolbar = ref<string>(getHeaderToolbar())

  function getCurrentDate(): Date {
    let date: Date = new Date()

    if(props.value) {
      const formattedDate = mainService.formatDate(props.value, props.displayFormat, view.value)
      if(formattedDate instanceof Date) {
        date = formattedDate
      }
    }

    return date
  }

  function getView(): string {
    const views = new Map([
      ['date', 'day'],
      ['datetime', 'day'],
      ['month', 'month'],
      ['year', 'year'],
      ['time', 'time'],
    ])

    const view: string = views.get(type) || ''

    return view
  }

  function getDatas(value: Date): Datas {
    if(type === 'date') {
      return daysService.getDays(value)
    }

    if(type === 'month') {
      return monthService.getMonth()
    }

    if(type === 'year') {
      return yearService.getYearMatrix(value.getFullYear())
    }
  }

  function getValue(item: Item) {
    if(daysService.isDay(view.value, item)) {
      return item.getDate()
    }
    if(monthService.isMonth(view.value, item)) {
      return item.name.substring(0, 3)
    }
    return item
  }

  function getHeaderToolbar(): string {
    if(daysService.isDay(view.value)) {
      return toolbarServices.getHeaderDay(currentDate.value)
    }
    
    if(monthService.isMonth(view.value)) {
      return toolbarServices.getHeaderMonth(currentDate.value)
    }

    if(yearService.isYear(view.value)) {
      if(datas.value) {
        return toolbarServices.getHeaderYear(datas.value)
      }
    }

    return ''
  }

  function getPreviousToolbar(): void {
    if(daysService.isDay(view.value)) {
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
    if(daysService.isDay(view.value)) {
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
    if(daysService.isDay(view.value)){
      datas.value = monthService.getMonth()
      view.value = 'month'
    } else if(monthService.isMonth(view.value)) {
      const year = Number(headerToolbar.value)
      datas.value = yearService.getYearMatrix(year)
      view.value = 'year' 
    }

    headerToolbar.value = getHeaderToolbar()
  }

  function isExcluded(item: Item): boolean {
    if(daysService.isDay(view.value, item)) {
      return daysService.isExcludedDay(item, currentDate.value)
    }

    if(monthService.isMonth(view.value, item)) {
      return monthService.isExcludedMonth(item)
    }

    if(yearService.isYear(view.value) && typeof item == 'number') {
      return yearService.isExcludedYear(item, headerToolbar.value)
      
    } 
    return true
  }

  function isCurrent(item: Item): boolean {
    if(daysService.isDay(view.value, item)) {
      return daysService.isCurrentDay(item)
    }
    return false
  }

  function isSelected(item: Item): boolean {
    if(daysService.isDay(view.value, item)) {
      const selectedItem = mainService.formatDate(item, props.displayFormat)

      return selectedItem === selectedDate.value
    }

    if(monthService.isMonth(view.value, item)) {
      const selectedItem = Number(selectedDate.value.split('.')[0]) - 1

      return selectedItem === item.number && item.currentYear
    }

    if(yearService.isYear(view.value, item)) {
      const selectedItem = Number(selectedDate.value)

      return selectedItem === item
    }

    return false
  }

  function selectItem(item: Date | MonthItem | number): void {
    if(daysService.isDay(view.value, item)) {
      const formattedDate = mainService.formatDate(item, props.displayFormat)
      if(typeof formattedDate === 'string') {
        selectedDate.value = formattedDate
        if(!props.showSelectButton) {
          selectDate()
        }
      }
    }

    if(monthService.isMonth(view.value, item)) {
      if(type === 'month') {
        currentDate.value.setMonth(item.number)
        if(!item.currentYear) {
          getNextToolbar()
        }

        const formattedDate = mainService.formatDate(currentDate.value, props.displayFormat)
        if(typeof formattedDate === 'string') {
          selectedDate.value = formattedDate
          if(!props.showSelectButton) {
            selectDate()
          }
        }
      } else {
        currentDate.value.setMonth(item.number)
        datas.value = daysService.getDays(currentDate.value)
        view.value = 'day'
      }
    }

    if(yearService.isYear(view.value, item)) {
      if(type === 'year') {
        currentDate.value.setFullYear(item)

        const years = headerToolbar.value.split(' - ')
        const startYear = Number(years[0])
        const endYear = Number(years[1])
        if(startYear > item) {
          getPreviousToolbar()
        }

        if(endYear < item) {
          getNextToolbar()
        }

        const formattedDate = mainService.formatDate(currentDate.value, props.displayFormat)
        if(typeof formattedDate === 'string') {
          selectedDate.value = formattedDate
          if(!props.showSelectButton) {
            selectDate()
          }
        }
      } else {
        currentDate.value.setFullYear(item)
        datas.value = monthService.getMonth()
        view.value = 'month'
      }
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
    // ctx.emit('update:model-value', selectedDate.value)
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
