import firebase from 'firebase'

type UserType = {
  id?: string;
  name?: string;
  avatar?: string;
  email?: string;
  ranking?: number;
  playID?: number;
  isAdmin?: boolean;
  createdAt?: firebase.firestore.Timestamp;
}

export default UserType