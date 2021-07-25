import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { FC, useContext, useState, useEffect } from 'react'
import { MatchResult, Period, Player, Rating } from 'go-glicko'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { MatchType, UserType } from '../../types'
import { Button } from '../Button'
import { StyledMatchRequestDialog } from '.'

type Props = {
  match: MatchType;
  enumText: string;
}

const MatchRequestDialog: FC<Props> = ({ match, enumText }) => {
  TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo('en-US')

  const { firestore, userDetails } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')
  const matchesDB = firestore!.collection('matches')

  const [opponent1, setOpponent1] = useState<UserType>()
  const [opponent2, setOpponent2] = useState<UserType>()

  const approveMatch = async () => {
    let players: { [key: string]: Player } = {
      'op_1': new Player(new Rating(opponent1?.ranking!, 100, 0.06)),
      'op_2': new Player(new Rating(opponent2?.ranking!, 100, 0.06))
    }
    
    let period = new Period()
    
    Object.keys(players).forEach((name: string) => {
      period.addPlayer(players[name])
    })
    
    period.addMatch(players['op_1'], players['op_2'], match.winnerID === match.uid ? MatchResult.WIN : MatchResult.LOSS)
    
    period.Calculate()

    await usersDB.doc(opponent1?.id).update({
      ranking: parseInt(players['op_1'].Rating().R().toFixed(0))
    })

    await usersDB.doc(opponent2?.id).update({
      ranking: parseInt(players['op_2'].Rating().R().toFixed(0))
    })

    await matchesDB.doc(match.id).update({
      isApproved: true,
      userRanking: parseInt(players['op_1'].Rating().R().toFixed(0)),
      opponentRanking: parseInt(players['op_2'].Rating().R().toFixed(0)),
      op1Diff: parseInt(players['op_1'].Rating().R().toFixed(0)) - opponent1?.ranking!,
      op2Diff: parseInt(players['op_2'].Rating().R().toFixed(0)) - opponent2?.ranking!
    })
  }

  const declineMatch = async () => {
    await matchesDB.doc(match.id).update({
      isDeclined: true
    })
  }

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
    <StyledMatchRequestDialog>
      {
        opponent1 &&
        opponent2 &&
        <>
          <span>
            Did <b>{opponent1.id === userDetails?.id ? 'you' : opponent1.name}</b> beat <b>{opponent2.id === userDetails?.id ? 'you' : opponent2.name}</b> in a match of chess {timeAgo.format(new Date(match.createdAt?.toDate() || 0))}?
          </span>
          <div className="match-actions-container">
            <div className="match-actions">
              <Button 
                onClick={() => approveMatch()}
                className="yes-btn"
              >
                Yes
              </Button>
              <Button
                onClick={() => declineMatch()}
                className="no-btn"
              >
                No
              </Button>
            </div>
            <span>{enumText}</span>
          </div>
        </>
      }
    </StyledMatchRequestDialog>
  )
}

export default MatchRequestDialog
