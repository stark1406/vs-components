import { YearContract } from './YearContract'
import type { Item } from '../../types'

export default class YearService extends YearContract{
  getYearMatrix(year: number): number[][] {
    const numberAsString = year.toString()
    const startYear = parseFloat(numberAsString.slice(0, -1) + '0') - 1
    const endYear = startYear + 15

    const yearMatrix = this.generateYearArray(startYear, endYear)
    const numberOfSubArrays = 4
    const subArrays = this.splitArrayIntoSubArrays(yearMatrix, numberOfSubArrays)

    return subArrays
  }

  private generateYearArray(startYear: number, endYear: number): number[] {
    const yearArray: number[] = []
  
    for (let year = startYear; year <= endYear; year++) {
      yearArray.push(year)
    }
  
    return yearArray
  }
  
  private splitArrayIntoSubArrays(array: number[], numberOfSubArrays: number): number[][] {
    const subArraySize = array.length / numberOfSubArrays
    const subArrays: number[][] = []
  
    for (let i = 0; i < numberOfSubArrays; i++) {
      const start = i * subArraySize
      const end = start + subArraySize
  
      subArrays.push(array.slice(start, end))
    }
  
    return subArrays
  }

  isYear(view: string, item?: Item): item is number {
    if(item) {
      return view === 'year' && typeof item === 'number'
    }

    return view === 'year'
  }

  isExcludedYear(item: number, headerToolbar: string): boolean {
    const startYear = Number(headerToolbar.split(' - ')[0])
    const endYear = Number(headerToolbar.split(' - ')[1])

    return item >= startYear && item <= endYear
  }
}