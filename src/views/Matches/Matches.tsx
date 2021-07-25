import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { WidthController } from '../../components/WidthController'
import { MatchType } from '../../types'
import { MatchItem } from '../../components/MatchItem'
import { StyledMatches } from '.'

const Matches: FC = () => {
  const { firestore } = useContext(firebaseStore)
  const matchesDB = firestore!.collection('matches')

  const [matches, setMatches] = useState<MatchType[]>()

  useEffect(() => {
    return matchesDB
      .where('isDeclined', '==', false)
      .where('isApproved', '==', true)
      .orderBy('createdAt', 'desc')
      .onSnapshot(({ docs }) => {
        setMatches(docs.map((match) => ({
          id: match.id,
          ...match.data()
        } as MatchType)))
      })
  }, [])

  return (
    <WidthController>
      <StyledMatches>
        <div className="header">
          <h1>Matches</h1>
        </div>
        <div className="match-list">
          {
            matches?.map((match, index) => <MatchItem match={match} key={index}/>)
          }
        </div>
      </StyledMatches>
    </WidthController>
  )
}

export default Matches
