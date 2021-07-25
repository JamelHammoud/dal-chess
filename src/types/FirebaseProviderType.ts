import firebase from 'firebase'
import UserType from './UserType'

type FirebaseProviderType = {
  auth?: firebase.auth.Auth;
  firestore?: firebase.firestore.Firestore;
  storage?: firebase.storage.Storage;
  realtime?: firebase.database.Database;
  user?: firebase.User | null;
  userDetails?: UserType;
}

export default FirebaseProviderType