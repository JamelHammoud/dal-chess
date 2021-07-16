import ROUTES from '../../utils/router'
import { FC } from 'react'
import { HomeIcon, PlusIcon, ViewGridIcon } from '@heroicons/react/outline'
import { StyledSidebar, SidebarLink } from '.'
import { Button } from '../Button'

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <div className="sidebar-header">

      </div>
      <div className="sidebar-links">
        <Button
          className="sidebar-action-btn"
        >
          <PlusIcon/>
          <span>Input a Match</span>
        </Button>
        <SidebarLink
          route={ROUTES.App.home}
          icon={<HomeIcon/>}
        >
          Dashboard
        </SidebarLink>
        <SidebarLink
          route={ROUTES.App.routerTest}
          icon={<ViewGridIcon/>}
        >
          Feed
        </SidebarLink>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
