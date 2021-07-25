import firebase from 'firebase'
import ROUTES from '../utils/router'
import { config } from '../components/Firebase/config'
import { FC, createContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { FirebaseProviderType, UserType } from '../types'

const initialState: FirebaseProviderType = {
}

const firebaseStore = createContext(initialState)
const { Provider } = firebaseStore

const authRoutes = [ROUTES.App.signin, ROUTES.App.signup]

type Props = {
  children: JSX.Element;
}

const FirebaseProvider: FC<Props> = ({ children }) => {
  (!firebase.apps.length) ? firebase.initializeApp(config) : firebase.app()
  const usersDB = firebase.firestore().collection('users')

  const [user, setUser] = useState<firebase.User>()
  const [userDetails, setUserDetails] = useState<UserType>()

  const history = useHistory()
  const location = useLocation()

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    }
    if (!user && !authRoutes.includes(location.pathname)) {
      history.push('/signin')
    }
  })

  useEffect(() => {
    if (user) {
      return usersDB
        .where(firebase.firestore.FieldPath.documentId(), '==', user?.uid)
        .onSnapshot(({ docs }) => {
          const data = docs[0]
          setUserDetails({
            id: data.id,
            ...data.data() 
          } as UserType)
        })
    }
  }, [user])

  return (
    <Provider
      value={
        {
          auth: firebase.auth(),
          firestore: firebase.firestore(),
          storage: firebase.storage(),
          realtime: firebase.database(),
          user: user,
          userDetails: userDetails
        }
      }
    >
      {children}
    </Provider>
  )
}

export { firebaseStore, FirebaseProvider, Provider }
