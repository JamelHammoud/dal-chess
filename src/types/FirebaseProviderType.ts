import firebase from 'firebase'

type FirebaseProviderType = {
  auth?: firebase.auth.Auth;
  firestore?: firebase.firestore.Firestore;
  storage?: firebase.storage.Storage;
  realtime?: firebase.database.Database;
  user?: firebase.User | null;
}

export default FirebaseProviderType