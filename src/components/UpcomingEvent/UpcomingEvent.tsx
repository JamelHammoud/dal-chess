import firebase from 'firebase'
import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { EventType } from '../../types'
import { StyledUpcomingEvent } from '.'

const UpcomingEvent: FC = () => {
  const { firestore } = useContext(firebaseStore)
  const eventsDB = firestore!.collection('events')

  const [event, setEvent] = useState<EventType>()

  useEffect(() => {
    return eventsDB
      .where('date', '>=', firebase.firestore.Timestamp.now())
      .orderBy("date", "asc").limit(1)
      .onSnapshot(({ docs }) => {
        setEvent(docs[0].data() as EventType)
      }
    )
  }, [])

  return (
    <StyledUpcomingEvent>
      <div className="calendar">
        <div className="month">
          {event?.date.toDate().toLocaleString('default', { month: 'short' })}
        </div>
        <div className="day">
          {event?.date.toDate().toLocaleString('default', { day: 'numeric' })}
        </div>
      </div>
      <div className="event-details">
        <span className="event-label">UPCOMING EVENT</span>
        <span className="event-title">
          <mark>{event?.title}</mark>
          <span>at</span>
          {event?.date.toDate().toLocaleString('default', { hour: 'numeric', minute: 'numeric' })}
        </span>
      </div>
    </StyledUpcomingEvent>
  )
}

export default UpcomingEvent
