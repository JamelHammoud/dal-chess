import { FC } from 'react'
import { useParams } from 'react-router'
import { StyledPost } from '.'

const Post: FC = () => {

  return (
    <StyledPost>
      <div>Post!</div>
      <br/>
      <b>{postToken}</b>
    </StyledPost>
  )
}

export default Post
