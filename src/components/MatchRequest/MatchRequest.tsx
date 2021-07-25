import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { MatchType } from '../../types'
import { StyledMatchRequest, MatchRequestDialog } from '.'

const MatchRequest: FC = () => {
  const { firestore, userDetails } = useContext(firebaseStore)
  const matchesDB = firestore!.collection('matches')

  const [matches, setMatches] = useState<MatchType[]>([])
  const [noMatches, setNoMatches] = useState(false)

  useEffect(() => {
    if (userDetails) {
      return matchesDB
        .where('opponentID', '==', userDetails?.id)
        .where('isApproved', '==', false)
        .where('isDeclined', '==', false)
        .orderBy('createdAt', 'asc')
        .onSnapshot(({ docs }) => {
          if (docs.length === 0) {
            return setNoMatches(true)
          }

          setMatches(docs.map((match) => ({
            id: match.id,
            ...match.data()
          })))

          setNoMatches(false)
        })
    }
  }, [userDetails])

  return (
    <StyledMatchRequest>
      {
        !noMatches &&
        matches.slice(0, 1).map((match, index) => {
          return <MatchRequestDialog 
            key={index} 
            match={match}
            enumText={`${index + 1}/${matches.length}`}
          />
        })
      }
    </StyledMatchRequest>
  )
}

export default MatchRequest
