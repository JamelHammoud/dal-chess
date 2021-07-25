import firebase from 'firebase'
import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { WidthController } from '../../components/WidthController'
import { HashtagIcon } from '@heroicons/react/outline'
import { LineInput } from '../../components/LineInput'
import { UserType } from '../../types'
import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { StyledMatch } from '.'

const Match: FC = () => {
  const { firestore, userDetails } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')
  const matchesDB = firestore!.collection('matches')

  const [opponentIDError, setOpponentIDError] = useState('')

  const [opponentID, setOpponentID] = useState(0)
  const [opponent, setOpponent] = useState<UserType>()
  const [winnerID, setWinnerID] = useState('')

  const submitMatch = async () => {
    await matchesDB.add({
      uid: userDetails?.id,
      userRanking: userDetails?.ranking,
      opponentID: opponent?.id,
      opponentRanking: opponent?.ranking,
      winnerID,
      isApproved: false,
      isDeclined: false,
      createdAt: firebase.firestore.Timestamp.now()
    })
  }

  useEffect(() => {
    if (opponentID) {
      return usersDB
        .where('playID', '==', opponentID)
        .limit(1)
        .onSnapshot(({ docs }) => {
          if (docs.length === 0) {
            return setOpponentIDError('Opponent not found!')
          }

          const opponent: UserType = {
            id: docs[0].id,
            ...docs[0].data()
          }

          if (opponent.id === userDetails?.id) {
            return setOpponentIDError('You can\'t play with yourself!')
          }
          
          setOpponent(opponent)
          return setOpponentIDError('')
        })
    }
  }, [opponentID])

  return (
    <WidthController>
      <StyledMatch>
        <div className="header">
          <h1>Input a Match</h1>
          <div className="ranking">
            <span>ID</span>
            <h2>#{userDetails?.playID}</h2>
          </div>
        </div>

        <div className="match-input">
          <LineInput 
            value={opponentID}
            label="Opponent ID" 
            icon={<div className="id-icon">{<HashtagIcon/>}</div>}
            name="opponent-id"
            paddingLeft={36}
            error={opponentIDError}
            maxLength={4}
            type="text"
            onChange={(id: string) => setOpponentID(parseInt(id))}
          />
          {
            opponent &&
            !opponentIDError &&
            <>
              <div className="opponent-display">
                <div className="user-vs">
                  <Avatar hash={userDetails?.id!} name={userDetails?.name!}/>
                  <div className="user-vs-details">
                    <span className="user-vs-name">You</span>
                    <span className="user-vs-rank">{userDetails?.ranking}</span>
                  </div>
                </div>
                <span className="user-vs-label">VS</span>
                <div className="user-vs">
                  <div className="user-vs-details">
                    <span className="user-vs-name">{opponent.name}</span>
                    <span className="user-vs-rank">{opponent.ranking}</span>
                  </div>
                  <Avatar hash={opponent.id!} name={opponent.name!}/>
                </div>
              </div>

              <div className="win-select">
                <span className="win-select-label">Who won?</span>
                <div className="win-select-grid">
                  <div className="win-select-input">
                    <input 
                      onChange={(e) => setWinnerID(e.currentTarget.value)} 
                      type="radio" 
                      name="winner"
                      value={userDetails?.id}
                    />
                    <span>You</span>
                  </div>
                  <div className="win-select-input">
                    <input 
                      onChange={(e) => setWinnerID(e.currentTarget.value)} 
                      type="radio" 
                      name="winner"
                      value={opponent?.id}
                    />
                    <span>{opponent.name}</span>
                  </div>
                </div>
              </div>
            </>
          }
        </div>

        <Button 
          onClick={() => submitMatch()}
          isDisabled={!opponent || !winnerID || opponentIDError !== ''}
          className="submit-btn"
        >
          Send match for approval
        </Button>
      </StyledMatch>
    </WidthController>
  )
}

export default Match
