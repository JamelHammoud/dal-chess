import { Moment } from 'moment'

export { default as Calendar } from './Calendar'
export { default as StyledCalendar } from './Calendar.Styled'

export { default as CalendarDay } from './CalendarDay'
export { default as StyledCalendarDay } from './CalendarDay.Styled'

export type CalendarType = {
  days: Moment[]
}
