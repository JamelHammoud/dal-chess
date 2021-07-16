import { FC } from 'react'
import { PostType } from '../../types'
import { StyledFeedPost } from '.'

type Props = {
  post: PostType;
}

const FeedPost: FC<Props> = ({ post }) => {
  return (
    <StyledFeedPost>
      <div className="post-user">
        <div className="avatar"></div>
        <div className="user-details">
          <span className="user-name"></span>
        </div>
      </div>
    </StyledFeedPost>
  )
}

export default FeedPost
