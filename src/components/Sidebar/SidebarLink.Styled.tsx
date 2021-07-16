import styled from 'styled-components'
import { Link } from 'react-router-dom'

type StyledProps = {
  isActive: boolean;
}

const StyledSidebarLink = styled(Link)<StyledProps>`
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 5px;
  padding: 0 7px;
  cursor: pointer;
  text-decoration: none;
  background: ${({isActive}) => isActive ? '#F3F4F6' : 'transparent'};

  .icon {
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: ${({isActive}) => isActive ? '#1F2937' : '#6B7280'};
  }

  .label {
    font-weight: 500;
    color: ${({isActive}) => isActive ? '#1F2937' : '#4B5563'};
    margin-top: 3px;
  }
`

export default StyledSidebarLink
