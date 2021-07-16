import { FC, ReactNode } from 'react'
import { Sidebar } from '../Sidebar'
import { StyledAppLayout } from '.'

type Props = {
  children?: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <StyledAppLayout>
      <Sidebar/>
      <div className="app-content">
        {children}
      </div>
    </StyledAppLayout>
  )
}

export default AppLayout
