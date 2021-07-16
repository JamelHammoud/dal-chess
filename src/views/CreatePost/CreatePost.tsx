import firebase from 'firebase'
import StyledAdminCreate from '../../components/Admin/StyledAdminCreate.Styled'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { FC, useContext, useState } from 'react'
import { WidthController } from '../../components/WidthController'
import { Button } from '../../components/Button'

const CreatePost: FC = () => {
  const { user, firestore } = useContext(firebaseStore)

  const [postContent, setPostContent] = useState('')
  const postsDB = firestore!.collection('posts')
  
  const createPost = async () => {
    if (postContent) {
      return await postsDB.add({
        postContent: postContent,
        postLikes: 0,
        postComments: 0,
        createdAt: firebase.firestore.Timestamp.now(),
        createdBy: user?.uid
      })
    }
  }

  return (
    <WidthController>
      <StyledAdminCreate>
        <div className="input-container">
          <span className="input-label">Post Content</span>
          <textarea 
            value={postContent}
            onChange={(e) => setPostContent(e.currentTarget.value)}
          ></textarea>
        </div>
        <Button onClick={() => createPost()}>Create Post</Button>
      </StyledAdminCreate>
    </WidthController>
  )
}

export default CreatePost
