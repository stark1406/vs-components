import { ToolbarContract } from "./ToolbarContract"

export default class ToolbarService extends ToolbarContract {
  getHeaderDay(date: Date): string {
    const year = date.getFullYear()

    let month = date.toLocaleString('default', { month: 'long' })

    month = month[0].toUpperCase() + month.slice(1)

    return `${month} ${year}`
  }

  getHeaderMonth(date: Date): string {
    const year = date.getFullYear()

    return String(year)
  }

  getHeaderYear(datas: number[][]): string {
    const startYear = datas[0][1]
    const endYear = datas[2][2]

    return `${startYear} - ${endYear}`
  }
}