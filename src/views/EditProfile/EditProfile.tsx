import StyledAdminCreate from '../../components/Admin/StyledAdminCreate.Styled'
import { FC, useContext, useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { Button } from '../../components/Button'
import { WidthController } from '../../components/WidthController'
import { useEffect } from 'react'
import { LineInput } from '../../components/LineInput'

const EditProfile: FC = () => {
  const { userDetails, firestore, storage } = useContext(firebaseStore)
  const usersDB = firestore!.collection('users')
  const imagesRef = storage!.ref().child(`/profile_images/${userDetails?.id}.jpg`)

  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [uploadAvatar, setUploadAvatar] = useState<File>()

  const editProfile = async () => {
    if (uploadAvatar) {
      const imageUpload = await imagesRef.put(uploadAvatar)
      const imageUrl = await imageUpload.ref.getDownloadURL()
      
      return usersDB.doc(userDetails?.id).update({
        name: userName,
        avatar: imageUrl
      })
    }

    return usersDB.doc(userDetails?.id).update({
      name: userName,
      avatar: ''
    })
  }

  const handleFileChange = (file: FileList | null) => {
    if (file) {
      setUploadAvatar(file[0])
      setUserAvatar(URL.createObjectURL(file[0]))
    }
  }

  useEffect(() => {
    setUserName(userDetails?.name!)
    setUserAvatar(userDetails?.avatar || '')
  }, [userDetails])

  return (
    <WidthController>
      <StyledAdminCreate>
        <LineInput
          label="Your name"
          value={userName}
          onChange={(val) => setUserName(val)}
        />
        
        <div className="input-container">
          <span className="input-label">Profile Image</span>
          <div className="input-image">
            {
              userAvatar &&
              <Button 
                onClick={() => setUserAvatar('')}
                className="remove-img-btn"
              >
                <XIcon/>
              </Button>
            }
            {
              userAvatar && 
              <div className="image-preview">
                <img src={userAvatar}/>
              </div>
            }
            {
              !userAvatar && 
              <span>Drag & drop or click here to upload a photo</span>
            }
            <input 
              onChange={(e) => handleFileChange(e.currentTarget.files)}
              type="file"
              accept="image/png"
            />
          </div>
        </div>

        <Button 
          className="submit-btn" 
          onClick={() => editProfile()}
          isDisabled={!userName || ((userAvatar === userDetails?.avatar || (!userAvatar && !userDetails?.avatar)) && userName === userDetails!.name)}
        >Update Profile</Button>
      </StyledAdminCreate>
    </WidthController>
  )
}

export default EditProfile
