import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { config } from '../Firebase/config'
import { StyledSignUp } from '.'

const SignUp: FC = () => {
  const history = useHistory()

  const [inputUsername, setInputUsername] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const signUp = () => {
    (!firebase.apps.length) ? firebase.initializeApp(config) : firebase.app()
    const auth = firebase.auth()

    auth.createUserWithEmailAndPassword(inputEmail, inputPassword)
      .then((userCredential) => {
        const user = firebase.auth().currentUser

        user!.updateProfile({
          displayName: inputUsername
          }).then(function() {
            history.push('/')
          }).catch(function(error) {
        })

        console.log(userCredential.user)
    })
    .catch((error) => {
      var errorCode = error.code
      alert(error.message)
    });
  }

  return (
    <StyledSignUp>
      <input type="text" placeholder="Username" onChange={(e) => setInputUsername(e.currentTarget.value)} />
      <input type="email" placeholder="Email address" onChange={(e) => setInputEmail(e.currentTarget.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setInputPassword(e.currentTarget.value)} />
      <button onClick={ signUp }>Sign Up</button>
    </StyledSignUp>
  )
}

export default SignUp
