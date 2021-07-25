import ROUTES from '../../utils/router'
import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { firebaseStore } from '../../providers/FirebaseProvider'
import { CalendarIcon, ChartBarIcon, FlagIcon, HomeIcon, LogoutIcon, PlusIcon, UserCircleIcon, UsersIcon, ViewGridIcon } from '@heroicons/react/outline'
import { Button } from '../Button'
import { Avatar } from '../Avatar'
import { Logo } from '../Logo'
import { StyledSidebar, SidebarLink } from '.'

const Sidebar: FC = () => {
  const { auth, userDetails } = useContext(firebaseStore)

  const signOut = async () => {
    await auth!.signOut()
  }

  return (
    <StyledSidebar>
      <div className="sidebar-top">
        <div className="sidebar-header">
          <Logo/>
        </div>
        <div className="sidebar-links">
          <Link
            to={ROUTES.App.inputMatch}
            className="sidebar-action-btn"
          >
            <PlusIcon/>
            <span>Input a Match</span>
          </Link>
          <SidebarLink
            route={ROUTES.App.home}
            icon={<HomeIcon/>}
          >
            Dashboard
          </SidebarLink>
          <SidebarLink
            route={ROUTES.App.calendar}
            icon={<CalendarIcon/>}
          >
            Calendar
          </SidebarLink>
          <SidebarLink
            route={ROUTES.App.matches}
            icon={<FlagIcon/>}
          >
            Matches
          </SidebarLink>
          <SidebarLink
            route={ROUTES.App.leaderboard}
            icon={<ChartBarIcon/>}
          >
            Leaderboard
          </SidebarLink>
          <SidebarLink
            route={ROUTES.App.editProfile}
            icon={<UserCircleIcon/>}
          >
            My Profile
          </SidebarLink>
        </div>
        {
          userDetails?.isAdmin &&
          <>
            <br/>
            <div className="sidebar-links">
              <SidebarLink
                route={ROUTES.Admin.createEvent}
                icon={<PlusIcon/>}
              >
                Create Event
              </SidebarLink>
              <SidebarLink
                route={ROUTES.Admin.createPost}
                icon={<PlusIcon/>}
              >
                Create Post
              </SidebarLink>
              <SidebarLink
                route={ROUTES.App.routerTest}
                icon={<UsersIcon/>}
              >
                View Members
              </SidebarLink>
            </div>
          </>
        }
      </div>
      <div className="sidebar-bottom">
        {
          userDetails &&
          <div className="user-container">
            <Avatar name={userDetails.name!} hash={userDetails.id!}/>
            <div className="user-details">
              <span className="user-name">
                {userDetails.name}
              </span>
              <span className="user-play-id">
                #{userDetails?.playID}
              </span>
            </div>
            
          </div>
        }
       
        <Button 
          className="sign-out-btn"
          onClick={() => signOut()}
        >
          <LogoutIcon/>
        </Button>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
