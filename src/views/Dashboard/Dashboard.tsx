import { FC, useContext } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { WidthController } from '../../components/WidthController'
import { UpcomingEvent } from '../../components/UpcomingEvent'
import { FeedGrid } from '../../components/FeedGrid'
import { MatchRequest } from '../../components/MatchRequest'
import { StyledDashboard } from '.'

const Dashboard: FC = () => {
  const { userDetails } = useContext(firebaseStore)

  return (
    <WidthController>
      <StyledDashboard>
        <div className="header">
          <h1>Dashboard</h1>
          <div className="ranking">
            <span>Rank</span>
            <h2>{userDetails?.ranking}</h2>
          </div>
        </div>
        <MatchRequest/>
        <UpcomingEvent/>
        <FeedGrid/>
      </StyledDashboard>
    </WidthController>
  )
}

export default Dashboard
