import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Button } from '../../components/Button'
import { StyledCalendar, CalendarDay, CalendarType } from '.'

const Calendar: FC = () => {
  const [today, setToday] = useState(moment())
  const [calendar, setCalendar] = useState<CalendarType[]>([])
  const [currMonth, setCurrMonth] = useState(today.format('M'))

  const previousMonth = () => {
    setToday(today.clone().subtract(1, 'month'))
  }

  const nextMonth = () => {
    setToday(today.clone().add(1, 'month'))
  }

  const thisMonth = () => {
    setToday(moment())
  }

  useEffect(() => {
    const startDay = today.clone().startOf('month').startOf('week')
    const endDay = today.clone().endOf('month').endOf('week')
    const date = startDay.clone().subtract(1, 'day')
  
    const tempCalendar: CalendarType[] = []

    while (date.isBefore(endDay, 'day')) {
      tempCalendar.push({
        days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
      })
    }

    setCurrMonth(today.format('M'))
    setCalendar(tempCalendar)
  }, [today])

  return (
    <StyledCalendar>
      <div className="calendar-full-header">
        <span className="calendar-full-header-year">{today.format("YYYY")}</span>
        <div className="calendar-full-header-month">
          <Button onClick={() => previousMonth()}><ChevronLeftIcon/></Button>
          <span className="calendar-full-title">{today.format("MMMM")}</span>
          <Button onClick={() => nextMonth()}><ChevronRightIcon/></Button>
        </div>
        <Button onClick={() => thisMonth()} className="today-btn">Go to this month</Button>
      </div>
      <div className="calendar-full-grid">
        {
          calendar.map((week, index) => {
            return week.days.map((day, indexDay) => {
              return <CalendarDay key={index + indexDay} isActive={day.format('M') === currMonth} day={day}/>
            })
          })
        }
      </div>
    </StyledCalendar>
  )
}

export default Calendar
