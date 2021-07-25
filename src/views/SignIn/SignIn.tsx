import ROUTES from '../../utils/router'
import { FC, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { LineInput } from '../../components/LineInput'
import { StyledAuth } from '../SignUp'

const SignIn: FC = () => {
  const { auth } = useContext(firebaseStore)
  const history = useHistory()

  const [inputEmail, setInputEmail] = useState('')
  const [inputEmailError, setInputEmailError] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputPasswordError, setInputPasswordError] = useState('')

  const signInUser = async () => {
    
    const status = await auth!.signInWithEmailAndPassword(inputEmail, inputPassword)

    if (status.user) {
      history.push('/')
    }
  }

  const handleInput = (type: 'email' | 'password', value: string) => {
    switch(type) {
      case 'email':
        if (!value || !value.includes('@') || !value.includes('.')) {
          setInputEmailError('Please enter a valid email')
        }
        else {
          setInputEmailError('')
        }
        return setInputEmail(value)
      case 'password':
        if (!value) {
          setInputPasswordError('This cannot be empty')
        }
        else if (value.length < 6) {
          setInputPasswordError('Must be at least 6 characters')
        }
        else {
          setInputPasswordError('')
        }
        return setInputPassword(value)
    }
  }

  return (
    <StyledAuth>
      <div className="auth-container">
        <div className="auth">
          <Logo/>
          <div className="grid">
            <LineInput
              value={inputEmail}
              label="Email address"
              type="email"
              name="email-address"
              error={inputEmailError}
              onChange={(val) => handleInput('email', val)} 
            />

            <LineInput
              value={inputPassword}
              label="Password"
              type="password"
              name="password"
              error={inputPasswordError}
              onChange={(val) => handleInput('password', val)} 
            />
          </div>

          <Button
            isDisabled={!inputEmail || !!inputEmailError || !inputPassword || !!inputPasswordError}
            className="auth-btn"
            onClick={() => signInUser()}
          >
            Sign In
          </Button>
          <span className="page-prompt">Already have an account? <Link to={ROUTES.App.signup}>Sign Up</Link></span>
        </div>
      </div>
      <div className="splash"/>
    </StyledAuth>
  )
}

export default SignIn
