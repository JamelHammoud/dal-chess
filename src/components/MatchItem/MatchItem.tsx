import { FC, useContext, useState, useEffect } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { MatchType, UserType } from '../../types'
import { Avatar } from '../Avatar'
import { StyledMatchItem } from '.'

type Props = {
  match: MatchType;
}

const MatchItem: FC<Props> = ({ match }) => {
  const { firestore, userDetails } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')

  const [opponent1, setOpponent1] = useState<UserType>()
  const [opponent2, setOpponent2] = useState<UserType>()

  const getOpponents = async () => {
    const opponent1 = await usersDB.doc(match.uid).get()
    setOpponent1({
      id: opponent1.id,
      ...opponent1.data()
    } as UserType)

    const opponent2 = await usersDB.doc(match.opponentID).get()
    setOpponent2({
      id: opponent2.id,
      ...opponent2.data()
    } as UserType)
  }

  useEffect(() => {
    getOpponents()
  }, [])

  return (
    <StyledMatchItem>
      {
        opponent1 &&
        opponent2 &&
        <>
          <div className="user-vs">
            <Avatar hash={opponent1?.id!} name={opponent1?.name!}/>
            <div className="user-vs-details">
              <span className="user-vs-name">{opponent1.name === userDetails?.name ? 'You' : opponent1.name}</span>
              <span className={`user-vs-rank ${match.op1Diff! > 0 ? 'up' : 'down'}`}>
                <mark>{match.op1Diff! > 0 ? <ArrowUpIcon/> : <ArrowDownIcon/>} {match.op1Diff}</mark>
                {match.userRanking}
              </span>
            </div>
          </div>
          <span className="user-vs-label">VS</span>
          <div className="user-vs">
            <div className="user-vs-details">
              <span className="user-vs-name">{opponent2.name === userDetails?.name ? 'You' : opponent2.name}</span>
              <span className={`user-vs-rank ${match.op2Diff! > 0 ? 'up' : 'down'}`}>
                {match.opponentRanking}
                <mark>{match.op2Diff! > 0 ? <ArrowUpIcon/> : <ArrowDownIcon/>} {match.op2Diff}</mark>
              </span>
            </div>
            <Avatar hash={opponent2?.id!} name={opponent2?.name!}/>
          </div>
        </>
      }
    </StyledMatchItem>
  )
}

export default MatchItem
