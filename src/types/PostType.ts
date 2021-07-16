import firebase from 'firebase'

type PostType = {
  id: string;
  postContent: string;
  postLikes: number;
  postComments: number;
  createdBy: string;
  createdAt: firebase.firestore.Timestamp;
}

export default PostType