import firebase from 'firebase'

type EventType = {
  category: string;
  title: string;
  createdBy: string;
  createdAt: firebase.firestore.Timestamp;
  date: firebase.firestore.Timestamp;
}

export default EventType