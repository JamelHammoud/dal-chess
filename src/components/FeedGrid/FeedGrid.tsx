import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { EventType, PostType } from '../../types'
import { FeedPost } from '../FeedPost'
import { StyledFeedGrid } from '.'

const FeedGrid: FC = () => {
  const { firestore } = useContext(firebaseStore)
  const postsDB = firestore!.collection('posts')
  const usersDB = firestore!.collection('users')
  const eventsDB = firestore!.collection('events')

  const [posts, setPosts] = useState<PostType[]>([])
  const [events, setEvents] = useState<EventType[]>([])

  const loadPosts = async () => {
    
    /*

    return postsDB
    .orderBy('createdAt', 'desc')
    .onSnapshot(({ docs }) => {
      docs.map((post) => ({
        id: post.id,
        user: await loadPostUser(post.data().createdBy)
        ...post.data()
      })) as PostType[]
    })
    
      
      return usersDB.get()
        .onSnapshot(({ docs }) => {
          setPosts(docs.map((post) => ({
            id: post.id,
            ...post.data()
          })) as PostType[])
        })
        */
  }

  const loadPostUser = async (user: string) => {
    return 'hi'
  }

  useEffect(() => {
    loadPosts()
  }, [])

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
