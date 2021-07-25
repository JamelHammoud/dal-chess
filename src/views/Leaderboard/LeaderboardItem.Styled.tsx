import styled from 'styled-components'

const StyledLeaderboardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-details {
    display: flex;
    align-items: center;

    .user-name {
      letter-spacing: -0.03rem;
      color: #374151;
      font-weight: 500;
      word-break: break-all;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      display: -webkit-box;
    }

    .avatar {
      margin-right: 1rem;
    }
  }

  .user-ranking {
    color: #6B7280;
  }
`

export default StyledLeaderboardItem
