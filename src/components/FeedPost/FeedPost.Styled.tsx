import styled from 'styled-components'

type StyledProps = {
  isLoading: boolean;
  isLiked: boolean;
}

const StyledFeedPost = styled.div<StyledProps>`
  border: 1px solid #D1D5DB;
  border-radius: 3px;
  position: relative;

  ${({ isLoading }) => isLoading && `
    height: 145px;
    
    ::after {
      content: "";
      position: absolute;
      left: -1px;
      right: 0;
      top: -1px;
      bottom: 0;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      border-radius: 3px;
      z-index: 11;
      background: #f3f4f6;
    }
  `}

  .post-user {
    padding: 1rem;
    display: flex;

    .avatar {
      margin-right: 1rem;
    }

    .user-details {
      display: grid;
      align-content: center;

      .user-name {
        letter-spacing: -0.03rem;
        color: #374151;
        font-weight: 500;
      }

      .post-ago {
        margin-left: 8px;
        color: #9CA3AF;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0;
      }
    
      .user-rank {
        color: #6B7280;
        font-size: 14px;
      }
    }
  }

  .post-content {
    padding: 0 1rem;
    font-size: 16px;
    line-height: 23px;
    color: #4B5563;
    display: block;
  }

  .post-actions {
    padding: 8px;
    display: flex;
    align-items: center;

    .post-action {
      margin-right: 1rem;
      display: flex;
      align-items: center;
      height: 36px;
      border-radius: 5px;
      padding: 0 8px;
      background: transparent;
      transition: 0.2s;

      &.like {
        ${({ isLiked }) => isLiked && `
          .post-action-label {
            color: #B91C1C;
          }
          
          svg {
            color: #DC2626;
            fill: #DC2626;
          }
        `}
      }

      &:hover {
        background: #f3f4f6;

        &.like {
          ${({ isLiked }) => isLiked && `
            background: #FEF2F2;
          `}
        }
      }

      .post-action-icon {
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 9px;
        color: #9CA3AF;
      }
    
      .post-action-label {
        color: #6B7280;
      }
    }
  }
`

export default StyledFeedPost
