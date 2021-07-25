import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { UserType } from '../../types'
import { WidthController } from '../../components/WidthController'
import { StyledLeaderboard, LeaderboardItem } from '.'

const Leaderboard: FC = () => {
  const { firestore } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')

  const [users, setUsers] = useState<UserType[]>()

  useEffect(() => {
    return usersDB
      .orderBy('ranking', 'desc')
      .onSnapshot(({ docs }) => {
        setUsers(docs.map((user) => ({
          id: user.id,
          ...user.data()
        } as UserType)))
      })
  }, [])

  return (
    <WidthController>
      <StyledLeaderboard>
        <div className="header">
          <h1>Leaderboard</h1>
        </div>
        <div className="user-list">
          {
            users?.map((user, index) => {
              return <LeaderboardItem user={user} key={index}/>
            })
          }
        </div>
      </StyledLeaderboard>
    </WidthController>
  )
}

export default Leaderboard
