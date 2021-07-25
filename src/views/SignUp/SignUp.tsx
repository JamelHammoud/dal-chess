import firebase from 'firebase'
import ROUTES from '../../utils/router'
import { FC, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { LineInput } from '../../components/LineInput'
import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { StyledAuth } from '.'

const SignUp: FC = () => {
  const { auth, firestore } = useContext(firebaseStore)
  const history = useHistory()

  const [inputFirstName, setInputFirstName] = useState('')
  const [inputFirstNameError, setInputFirstNameError] = useState('')
  const [inputLastName, setInputLastName] = useState('')
  const [inputLastNameError, setInputLastNameError] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputEmailError, setInputEmailError] = useState('')
  const [inputRanking, setInputRanking] = useState(1000)
  const [inputPassword, setInputPassword] = useState('')
  const [inputPasswordError, setInputPasswordError] = useState('')

  const usersDB = firestore!.collection('users')

  const signUpUser = async () => {
    const uploadedUser = await auth!.createUserWithEmailAndPassword(inputEmail, inputPassword)
    const user = uploadedUser.user

    await user!.updateProfile({
      displayName: `${inputFirstName} ${inputLastName}`
    })

    await usersDB.doc(user!.uid).set({
      name: `${inputFirstName} ${inputLastName}`,
      email: inputEmail,
      ranking: inputRanking,
      playID: Math.floor(1000 + Math.random() * 9000),
      createdAt: firebase.firestore.Timestamp.now()
    })

    history.push('/')
  }

  const handleInput = (type: 'firstname' | 'lastname' | 'email' | 'password', value: string) => {
    switch(type) {
      case 'firstname':
        if (!value) {
          setInputFirstNameError('Invalid input')
        }
        else {
          setInputFirstNameError('')
        }
        return setInputFirstName(value)
      case 'lastname':
        if (!value) {
          setInputLastNameError('Invalid input')
        }
        else {
          setInputLastNameError('')
        }
        return setInputLastName(value)
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
            <div className="grid-double-row">
              <LineInput
                value={inputFirstName}
                label="First name"
                name="first-name"
                error={inputFirstNameError}
                onChange={(val) => handleInput('firstname', val)} 
              />
              <LineInput
                value={inputLastName}
                label="Last name"
                name="last-name"
                error={inputLastNameError}
                onChange={(val) => handleInput('lastname', val)} 
              />
            </div>

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
            
            <div className="user-ranking-container">
              <label>What is your chess level?</label>
              <div className="user-ranking">
                <div className="user-ranking-select">
                  <span className="user-ranking-title">Beginner</span>
                  <span className="user-ranking-value">Starts at <i>RANK</i> 500</span>
                  <input 
                    onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
                    type="radio" 
                    name="user-ranking" 
                    value="500"
                  />
                </div>
                <div className="user-ranking-select">
                  <span className="user-ranking-title">Intermediate</span>
                  <span className="user-ranking-value">Starts at <i>RANK</i> 1000</span>
                  <input 
                    onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
                    defaultChecked 
                    type="radio" 
                    name="user-ranking" 
                    value="1000"
                  />
                </div>
                <div className="user-ranking-select">
                  <span className="user-ranking-title">Advanced</span>
                  <span className="user-ranking-value">Starts at <i>RANK</i> 1500</span>
                  <input
                    onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
                    type="radio" 
                    name="user-ranking" 
                    value="1500"
                  />
                </div>
                <div className="user-ranking-select">
                  <span className="user-ranking-title">Pro</span>
                  <span className="user-ranking-value">Starts at <i>RANK</i> 2000</span>
                  <input 
                    onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
                    type="radio" 
                    name="user-ranking" 
                    value="2000"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            isDisabled={!inputFirstName || !inputLastName || !inputEmail || !!inputEmailError || !inputPassword || !!inputPasswordError}
            className="auth-btn"
            onClick={() => signUpUser()}
          >
            Sign Up
          </Button>
          <span className="page-prompt">Already have an account? <Link to={ROUTES.App.signin}>Sign In</Link></span>
        </div>
      </div>
      <div className="splash"/>
    </StyledAuth>
  )
}

export default SignUp
