import firebase from 'firebase'
import UserType from './UserType'

type PostType = {
  id: string;
  postContent?: string;
  postLikes?: number;
  postComments?: number;
  createdBy?: string;
  user?: UserType;
  createdAt?: firebase.firestore.Timestamp;
}

export default PostType