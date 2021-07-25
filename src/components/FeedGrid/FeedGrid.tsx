import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { EventType, PostType, UserType } from '../../types'
import { FeedPost } from '../FeedPost'
import { StyledFeedGrid } from '.'

const FeedGrid: FC = () => {
  const { firestore } = useContext(firebaseStore)
  const postsDB = firestore!.collection('posts')
  const usersDB = firestore!.collection('users')
  const eventsDB = firestore!.collection('events')

  const [posts, setPosts] = useState<PostType[]>([])
  const [postFeeder, setPostFeeder] = useState<PostType>()
  const [events, setEvents] = useState<EventType[]>([])

  const loadPosts = async () => {
    return postsDB
    .orderBy('createdAt', 'desc')
    .onSnapshot(({ docs }) => {
      setPosts(docs.map((post) => ({
        id: post.id,
        ...post.data()
      }) as PostType))
      
      /*
      docs.forEach(async (data) => {
        const preparePost: PostType = {
          id: data.id,
          ...data.data()
        }
        const postUser = await usersDB.doc(data.data().createdBy).get()
        preparePost.user = postUser.data() as UserType
        setPostFeeder(preparePost)
      })
      */
    })
  }

  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    if (postFeeder && !posts.includes(postFeeder)) {
      setPosts([...posts, postFeeder])
    }
  }, [postFeeder])

  return (
    <StyledFeedGrid>
      {
        posts.map((post, index) => {
          return <FeedPost post={post} key={index}/>
        })
      }
    </StyledFeedGrid>
  )
}

export default FeedGrid
