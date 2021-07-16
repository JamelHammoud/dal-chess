import firebase from 'firebase'
import StyledAdminCreate from '../../components/Admin/StyledAdminCreate.Styled'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { FC, useContext, useState } from 'react'
import { WidthController } from '../../components/WidthController'
import { Button } from '../../components/Button'

const CreateEvent: FC = () => {
  const { user, firestore } = useContext(firebaseStore)

  const [eventTitle, setEventTitle] = useState('')
  const [eventDate, setEventDate] = useState<firebase.firestore.Timestamp>()
  const [eventCategory, setEventCategory] = useState('')

  const eventsDB = firestore!.collection('events')
  
  const createEvent = async () => {
    if (eventTitle && eventDate && eventCategory) {
      return await eventsDB.add({
        title: eventTitle,
        date: eventDate,
        category: eventCategory,
        createdAt: firebase.firestore.Timestamp.now(),
        createdBy: user?.uid
      })
    }
  }

  return (
    <WidthController>
      <StyledAdminCreate>
        <div className="input-container">
          <span className="input-label">Event title</span>
          <input 
            value={eventTitle}
            onChange={(e) => setEventTitle(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div className="input-container">
          <span className="input-label">Event date and time</span>
          <input 
            value={eventDate?.toDate().toISOString().slice(0,16)}
            onChange={(e) => setEventDate(firebase.firestore.Timestamp.fromDate(new Date(e.currentTarget.value)))}
            type="datetime-local"
          />
        </div>
        <div className="input-container">
          <span className="input-label">Event type</span>
          <select value={eventCategory} onChange={(e) => setEventCategory(e.currentTarget.value)}>
            <option value="" disabled selected>Select an event type</option>
            <option value="match">Match</option>
            <option value="event">Event</option>
          </select>
        </div>
        <Button onClick={() => createEvent()}>Create Event</Button>
      </StyledAdminCreate>
    </WidthController>
  )
}

export default CreateEvent
