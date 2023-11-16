import type { Item } from '../types'

export default class YearService {
  getYearMatrix(year: number): number[][] {
    const numberAsString = year.toString()
    const startYear = parseFloat(numberAsString.slice(0, -1) + '0') - 1
    const endYear = startYear + 15
    const yearMatrix: number[] = []

    for (let year = startYear; year <= endYear; year++) {
      yearMatrix.push(year)
    }

    const numberOfSubArrays = 4
    const subArraySize = yearMatrix.length / numberOfSubArrays
    const subArrays: number[][] = []

    for (let i = 0; i < numberOfSubArrays; i++) {
      const start = i * subArraySize
      const end = start + subArraySize

      subArrays.push(yearMatrix.slice(start, end))
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