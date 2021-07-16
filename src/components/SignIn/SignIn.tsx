import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { config } from '../Firebase/config'
import { StyledSignIn } from '.'

const SignIn: FC = () => {
  const history = useHistory()

  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const signIn = () => {
    (!firebase.apps.length) ? firebase.initializeApp(config) : firebase.app()
    const auth = firebase.auth()

    auth.signInWithEmailAndPassword(inputEmail, inputPassword)
    .then(() => {
      history.push('/')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    })

  }

  return (
    <StyledSignIn>
      <input type="email" placeholder="Email address" onChange={(e) => setInputEmail(e.currentTarget.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setInputPassword(e.currentTarget.value)} />
      <button onClick={ signIn }>Sign In</button>
    </StyledSignIn>
  )
}

export default SignIn
