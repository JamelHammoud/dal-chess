import styled from 'styled-components'

const StyledSidebar = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid #D1D5DB;

  .sidebar-action-btn {
    background: #FBBF24;
    height: 38px;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02rem;
    color: #1F2937;
    padding: 0 1rem;
    border-radius: 50rem;
    margin: 1rem 0;
    font-weight: 600;
    
    svg {
      height: 24px;
      margin-left: -8px;
      margin-right: 10px;
    }
  }

  .sidebar-links {
    padding: 0 7px;
  }
`

export default StyledSidebar
