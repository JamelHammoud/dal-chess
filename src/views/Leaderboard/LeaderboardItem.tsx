import { FC, useContext } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { UserType } from '../../types'
import { Avatar } from '../../components/Avatar'
import { StyledLeaderboardItem } from '.'

type Props = {
  user: UserType;
}

const LeaderboardItem: FC<Props> = ({ user }) => {
  const { userDetails } = useContext(firebaseStore)

  return (
    <StyledLeaderboardItem>
      <div className="user-details">
        <Avatar hash={user.id!} name={user.name!}/>
        <span className="user-name">{user.id === userDetails?.id ? 'You' : user.name}</span>
      </div>
      <span className="user-ranking">{user.ranking}</span>
    </StyledLeaderboardItem>
  )
}

export default LeaderboardItem
