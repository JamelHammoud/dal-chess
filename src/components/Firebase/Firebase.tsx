import React, { FC, useEffect, useState } from 'react'
import firebase from 'firebase'
import { config } from './config'
import { StyledFirebase } from '.'
import { Input } from '../Input'

const Firebase: FC = () => {
  (!firebase.apps.length) ? firebase.initializeApp(config) : firebase.app()
  const db = firebase.database()
  const [messages, setMessages] = useState<JSX.Element[]>([])

  useEffect(() => {
    db.ref('messages')
    .once('value')
    .then(snapshot => {
      let messageList: JSX.Element[] = []

      snapshot.forEach((snap) => {
        messageList.push(<div className="message" key={ snap.val().content }>
          <div className="message-details">
            <div className="message-avatar"/>
            <span className="message-username">{ snap.val().username }</span>
          </div>
          <span className="message-content">{ snap.val().content }</span>
        </div>)
      })

      setMessages(messageList)
    })
  })
  
  return (
    <StyledFirebase>
      <div className="message-list">
        { messages }
      </div>
      <Input />
    </StyledFirebase>
  )
}

export default Firebase
