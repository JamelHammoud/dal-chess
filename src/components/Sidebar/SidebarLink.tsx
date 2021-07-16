import { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledSidebarLink } from '.'

type Props = {
  route: string;
  icon: ReactNode;
  children: ReactNode;
}

const SidebarLink: FC<Props> = ({ route, icon, children }) => {
  const location = useLocation()

  return (
    <StyledSidebarLink
      to={route}
      isActive={location.pathname === route}
    >
      <div className="icon">
        {icon}
      </div>
      <span className="label">
        {children}
      </span>
    </StyledSidebarLink>
  )
}

export default SidebarLink
