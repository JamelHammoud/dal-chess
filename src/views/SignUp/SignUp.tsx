import firebase from 'firebase'
import { FC, useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { StyledSignUp } from '.'

const SignUp: FC = () => {
  const { auth, firestore } = useContext(firebaseStore)
  const history = useHistory()

  const [inputUsername, setInputUsername] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputRanking, setInputRanking] = useState(1000)
  const [inputPassword, setInputPassword] = useState('')

  const usersDB = firestore!.collection('users')

  const SignUpUser = async () => {
    const uploadedUser = await auth!.createUserWithEmailAndPassword(inputEmail, inputPassword)
    const user = uploadedUser.user

    await user!.updateProfile({
      displayName: inputUsername
    })

    await usersDB.doc(user!.uid).set({
      name: inputUsername,
      email: inputEmail,
      ranking: inputRanking,
      createdAt: firebase.firestore.Timestamp.now()
    })

    history.push('/')
  }

  return (
    <StyledSignUp>
      <input 
        type="text" 
        placeholder="Full Name" 
        className="input-container"
        onChange={(e) => setInputUsername(e.currentTarget.value)} 
      />
      <input 
        type="email" 
        placeholder="Email address" 
        className="input-container"
        onChange={(e) => setInputEmail(e.currentTarget.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="input-container"
        onChange={(e) => setInputPassword(e.currentTarget.value)} 
      />
      <div className="user-ranking">
        <div className="user-ranking-select">
          <span className="user-ranking-title">Beginner</span>
          <span className="user-ranking-value"><i>RANK</i> 500</span>
          <input 
            onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
            type="radio" 
            name="user-ranking" 
            value="500"
          />
        </div>
        <div className="user-ranking-select">
          <span className="user-ranking-title">Intermediate</span>
          <span className="user-ranking-value"><i>RANK</i> 1000</span>
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
          <span className="user-ranking-value"><i>RANK</i> 1500</span>
          <input
            onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
            type="radio" 
            name="user-ranking" 
            value="1500"
          />
        </div>
        <div className="user-ranking-select">
          <span className="user-ranking-title">Pro</span>
          <span className="user-ranking-value"><i>RANK</i> 2000</span>
          <input 
            onChange={(e) => e.currentTarget.checked ? setInputRanking(parseInt(e.currentTarget.value)) : {}} 
            type="radio" 
            name="user-ranking" 
            value="2000"
          />
        </div>
      </div>
      <button onClick={ () => SignUpUser() }>Sign Up</button>
    </StyledSignUp>
  )
}

export default SignUp
