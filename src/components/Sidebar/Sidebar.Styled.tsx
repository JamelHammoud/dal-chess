import styled from 'styled-components'

const StyledSidebar = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid #D1D5DB;
  display: grid;
  align-content: space-between;
  z-index: 999;

  .sidebar-header {
    padding: 1rem 14px 0 14px;
  }

  .sidebar-action-btn {
    background: white;
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
    width: fit-content;
    text-decoration: none;
    box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent, 0 1px 1px 0 rgb(0 0 0 / 12%), 0 0 0 1px rgb(60 66 87 / 8%), 0 0 0 0 transparent, 0 0 0 0 transparent, 0 2px 5px 0 rgb(60 66 87 / 5%);
    
    svg {
      height: 20px;
      margin-left: -10px;
      margin-right: 10px;
      color: #1f2937;
      border-radius: 50%;
      padding: 4px;
      background: #f3f4f6;
    }
  }

  .sidebar-links {
    padding: 0 7px;
    display: grid;
    grid-gap: 5px;
  }

  .sidebar-bottom {
    padding: 1rem 14px;
    border-top: 1px solid #D1D5DB;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-container {
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 10px;
      }

      .user-name {
        font-weight: 500;
        letter-spacing: -0.02rem;
        color: #4B5563;
        word-break: break-all;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
      }

      .user-play-id {
        color: #6B7280;
        font-size: 13px;
        margin-top: -1px;
        display: block;
      }
    }
    
    .sign-out-btn {
      height: 36px;
      width: 36px;
      background: #F9FAFB;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6B7280;
      flex-shrink: 0;
      margin-left: 14px;

      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
  
`

export default StyledSidebar
