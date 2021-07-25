import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { config } from '../Firebase/config'
import { StyledInput } from '.'

const Input: FC = () => {
  (!firebase.apps.length) ? firebase.initializeApp(config) : firebase.app()
  const history = useHistory()
  const auth = firebase.auth()
  const db = firebase.database()
  const [user, setUser] = useState<firebase.User>()
  const [messageContent, setMessageContent] = useState("")

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    } else {
      history.push('/signin')
    }
  })

  const sendMessage = () => {
    const newMessage = db.ref('messages').push()

    newMessage.set({
      username: user?.displayName,
      content: messageContent
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      history.push('/signin')
    }).catch((error) => {
      // An error happened.
    })
  }

  return (
    <StyledInput>
      <input type="text" disabled value={ user?.displayName ? user?.displayName : "" } />
      <input type="text" placeholder="Message something..." onChange={(e) => setMessageContent(e.currentTarget.value)} />
      <button onClick={ sendMessage }>Send Message</button>
      <button className="secondary-button" onClick={ signOut }>Sign Out</button>
    </StyledInput>
  )
}

export default Input
