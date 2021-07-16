import firebase from 'firebase'

type UserType = {
  name: string;
  email: string;
  ranking: string;
  createdAt: firebase.firestore.Timestamp;
}

export default UserType