import { ref, computed, SetupContext } from 'vue'
import { inject } from 'vue'
import { TIME_FROM_MAIN } from '../../injectKey'
import { SELECT_DATE_FROM_MAIN } from '../../injectKey'
import type { TimePikerProps } from './types'
import type { Time } from '../../types'

export function useTimePicker(props: TimePikerProps, ctx: SetupContext) {
  const time: Time = inject(TIME_FROM_MAIN)!
  const timeData = ref<string[][]>([])
  const selectItem: (() => void) | undefined = inject(SELECT_DATE_FROM_MAIN)

  const dataHours: string[][] = [
    ['00','01','02','03'],
    ['04','05','06','07'],
    ['08','09','10','11'],
    ['12','13','14','15'],
    ['16','17','18','19'],
    ['20','21','22','23'],
  ]

  const dataMinutes: string[][] = [
    ['00','05','10'],
    ['15','20','25'],
    ['30','35','40'],
    ['45','50','55'],
  ]

  const computeHours = computed(() => {
    return time.hours < 10 ? `0${time.hours}` : time.hours
  })

  const computeMinutes = computed(() => {
    return time.minutes < 10 ? `0${time.minutes}` : time.minutes
  })

  function plusHours(): void {
    time.hours += 1
    if (time.hours > 23) time.hours = 0

    updateValue()
  }

  function plusMinutes(): void {
    time.minutes += 1
    if (time.minutes > 59) time.minutes = 0

    updateValue()
  }

  function minusHours(): void {
    if (time.hours == 0) {
      time.hours = 23
    } else {
      time.hours -= 1
    }

    updateValue()
  }
  function minusMinutes(): void {
    if (time.minutes == 0) {
      time.minutes = 59
    } else {
      time.minutes -= 1
    }

    updateValue()
  }

  function selectHours(): void {
    timeData.value = dataHours
    ctx.emit('update:selected-option', 'hours')
  }

  function selectMinutes(): void {
    timeData.value = dataMinutes
    ctx.emit('update:selected-option', 'minutes')
  }

  function selectedItem(item: string): void {
    if(props.selectedOption === 'hours') {
      time.hours = Number(item)
    } else {
      time.minutes = Number(item)
    }

    ctx.emit('update:selected-option', 'time')

    updateValue()
  }

  function isSelected(item: string): boolean {
    if(props.selectedOption === 'hours') {
      return time.hours == Number(item)
    } else {
      return time.minutes == Number(item)
    }
  }

  function updateValue() {
    if(!props.showSelectButton && selectItem) selectItem()
  }

  return {
    dataHours,
    dataMinutes,
    timeData,
    computeHours,
    computeMinutes,
    plusHours,
    plusMinutes,
    minusHours,
    minusMinutes,
    selectHours,
    selectMinutes,
    selectedItem,
    isSelected,
  }
}