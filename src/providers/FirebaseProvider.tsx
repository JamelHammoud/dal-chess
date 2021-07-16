import firebase from 'firebase'
import { config } from '../components/Firebase/config'
import { FC, createContext, useEffect } from 'react'
import { FirebaseProviderType } from '../types'
import { useState } from 'react'

const initialState: FirebaseProviderType = {
}

const firebaseStore = createContext(initialState)
const { Provider } = firebaseStore

type Props = {
  children: JSX.Element[];
}

const FirebaseProvider: FC<Props> = ({ children }) => {
  (!firebase.apps.length) ? firebase.initializeApp(config) : firebase.app()
  const [user, setUser] = useState<firebase.User>()

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    }
  })

  return (
    <Provider
      value={
        {
          auth: firebase.auth(),
          firestore: firebase.firestore(),
          storage: firebase.storage(),
          realtime: firebase.database(),
          user: user
        }
      }
    >
      {children}
    </Provider>
  )
}

export { firebaseStore, FirebaseProvider, Provider }
