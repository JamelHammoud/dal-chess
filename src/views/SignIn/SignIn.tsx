import { FC, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { StyledSignIn } from '.'

const SignIn: FC = () => {
  const { auth } = useContext(firebaseStore)
  const history = useHistory()

  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const SignInUser = async () => {
    const status = await auth!.signInWithEmailAndPassword(inputEmail, inputPassword)

    if (status.user) {
      history.push('/')
    }

    console.log(status)
  }

  return (
    <StyledSignIn>
      <input type="email" placeholder="Email address" onChange={(e) => setInputEmail(e.currentTarget.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setInputPassword(e.currentTarget.value)} />
      <button onClick={() => SignInUser()}>Sign In</button>
    </StyledSignIn>
  )
}

export default SignIn
