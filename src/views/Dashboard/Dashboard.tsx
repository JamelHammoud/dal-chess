import { FC, useEffect, useContext, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { UserType } from '../../types/'
import { WidthController } from '../../components/WidthController'
import { UpcomingEvent } from '../../components/UpcomingEvent'
import { FeedGrid } from '../../components/FeedGrid'
import { StyledDashboard } from '.'

const Dashboard: FC = () => {
  const { user, firestore } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')

  const [userRanking, setUserRanking] = useState(0)

  const getUserRanking = async () => {
    const data = await usersDB.doc(user?.uid).get()
    const userDetails = data.data() as UserType
    setUserRanking(userDetails.ranking)
  }

  useEffect(() => {
    if (user) {
      getUserRanking()
    }
  }, [user])

  return (
    <WidthController>
      <StyledDashboard>
        <div className="header">
          <h1>Dashboard</h1>
          <div className="ranking">
            <span>Rank</span>
            <h2>{userRanking}</h2>
          </div>
        </div>
        <UpcomingEvent/>
        <FeedGrid/>
      </StyledDashboard>
    </WidthController>
  )
}

export default Dashboard
