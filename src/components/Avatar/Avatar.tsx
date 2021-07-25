import ColorHash from 'color-hash'
import firebase from 'firebase'
import { FC, useContext, useEffect, useState } from 'react'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { StyledAvatar } from '.'

type Props = {
  name: string;
  hash: string;
}

const Avatar: FC<Props> = ({ name, hash }) => {
  const { firestore } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')

  const [avatarURL, setAvatarURL] = useState('')

  const colorHash = new ColorHash({
    hue: {min: 150, max: 200}
  })

  useEffect(() => {
    return usersDB
      .where(firebase.firestore.FieldPath.documentId(), '==', hash)
      .limit(1)
      .onSnapshot(({ docs }) => {
        if (docs.length) {
          setAvatarURL(docs[0].data().avatar)
        }
      })
  }, [])

  return (
    <StyledAvatar
      primary="white"
      secondary={colorHash.hex(hash)}
      className="avatar"
    >
      {
        !avatarURL &&
        name.split(' ').splice(0, 2).map(( word ) => {
          return word[0]
        })
      }
      {
        avatarURL &&
        <img src={avatarURL} alt=""/>
      }
    </StyledAvatar>
  )
}

export default Avatar
