import { FC, useEffect, useState, useContext } from 'react'
import moment, { Moment } from 'moment'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { EventType } from '../../types'
import { StyledCalendarDay } from '.'

type Props = {
  day: Moment;
  isActive?: boolean;
}

const CalendarDay: FC<Props> = ({ day, isActive }) => {
  const { firestore } = useContext(firebaseStore)
  const eventsDB = firestore!.collection('events')

  const [events, setEvents] = useState<EventType[]>([])

  useEffect(() => {
    return eventsDB
      .where('date', '>=', day.clone().startOf('day').toDate())
      .where('date', '<=', day.clone().startOf('day').add(1, 'd').toDate())
      .onSnapshot(({ docs }) => {
        setEvents(docs.map((event) => ({
          id: event.id,
          ...event.data()
        } as EventType)))
      }
    )
  }, [day])

  return (
    <StyledCalendarDay
      isActive={isActive}
    >
      <span className="label">{day.format('D')}</span>
      <div className="event-list">
        {
          events.map((event, index) => {
            return <div className="event" key={index}>
              {moment(event.date.toDate()).format('h:mma')} - {event.title}
            </div>
          })
        }
      </div>
    </StyledCalendarDay>
  )
}

export default CalendarDay
