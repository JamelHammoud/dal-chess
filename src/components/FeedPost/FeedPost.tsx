import firebase from 'firebase'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { PostType, UserType } from '../../types'
import { Button } from '../Button'
import { HeartIcon, ChatIcon } from '@heroicons/react/outline'
import { Avatar } from '../Avatar'
import { StyledFeedPost } from '.'

type Props = {
  post: PostType;
}

const FeedPost: FC<Props> = ({ post }) => {
  TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo('en-US')

  const { firestore, user } = useContext(firebaseStore)
  const postActionsDB = firestore!.collection('post_actions')
  const postsDB = firestore!.collection('posts')
  const usersDB = firestore!.collection('users')

  const [isLoading, setIsLoading] = useState(true)
  const [loadingLike, setLoadingLike] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const [postUser, setPostUser] = useState<UserType>()

  const [likedDocId, setLikedDocId] = useState('')

  const likePost = async () => {
    setLoadingLike(true)
    setIsLiked(true)
    
    const likeDoc = await postActionsDB.add({
      post: post.id,
      uid: user?.uid,
      likedAt: firebase.firestore.Timestamp.now()
    })

    setLikedDocId(likeDoc.id)

    await postsDB.doc(post.id).update({
      postLikes:post.postLikes! + 1
    })

    return setLoadingLike(false)
  }

  const unlikePost = async () => {
    setLoadingLike(true)
    setIsLiked(false)

    if (likedDocId) {
      await postActionsDB.doc(likedDocId).delete()
      await postsDB.doc(post.id).update({
        postLikes: post.postLikes! - 1
      })
    }
    setLikedDocId('')
    
    return setLoadingLike(false)
  }

  const getPostUser = async () => {
    const postUser = await usersDB.doc(post.createdBy).get()
    
    setPostUser({
      id: postUser.id,
      ...postUser.data()
    })

    setIsLoading(false)
  }

  useEffect(() => {
    getPostUser()
  }, [])

  useEffect(() => {
    return postActionsDB
      .where('post', '==', post.id)
      .where('uid', '==', user?.uid)
      .onSnapshot(({ docs }) => {
        if (docs.length > 0) {
          setIsLiked(true)
          return setLikedDocId(docs[0].id)
        }
        return setIsLiked(false)
      })
  }, [post])

  return (
    <StyledFeedPost
      isLoading={isLoading}
      isLiked={isLiked}
    >
      {
        postUser?.id &&
        <div className="post-user">
          <Avatar
            hash={post.createdBy!}
            name={postUser.name!}
          />
          <div className="user-details">
            <span className="user-name">
              {postUser.name!}
              <span className="post-ago">
                {timeAgo.format(new Date(post.createdAt?.toDate() || 0), 'mini')}
              </span>
            </span>
            <span className="user-rank">{postUser.ranking!}</span>
          </div>
        </div>
      }
      <div className="post-content-container">
        <span className="post-content">{post.postContent}</span>
      </div>
      <div className="post-actions">
        <Button 
          onClick={() => isLiked ? unlikePost() : likePost()}
          isDisabled={loadingLike}
          className="post-action like"
        >
          <div className="post-action-icon">
            <HeartIcon/>
          </div>
          <span className="post-action-label">{post.postLikes}</span>
        </Button>
        <Button 
          className="post-action comment"
        >
          <div className="post-action-icon">
            <ChatIcon/>
          </div>
          <span className="post-action-label">{post.postComments}</span>
        </Button>
      </div>
    </StyledFeedPost>
  )
}

export default FeedPost
