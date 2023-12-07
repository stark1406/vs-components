import type { DisplayFormat } from '../../types'

export abstract class MainContract {
  abstract formatDate(date: Date, displayFormat: DisplayFormat): Date | string
}