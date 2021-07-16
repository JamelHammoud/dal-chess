import styled from 'styled-components'

const StyledFirebase = styled.div`
  max-width: 500px;
  margin: 0 auto;

  .message {
    display: flex;
  }

  .message-details {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  .message-avatar {
    height: 22px;
    width: 22px;
    background: ${({ theme }) => theme.gray200};
    border-radius: 50%;
    margin-right: 9px;
  }

  .message-list {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    margin-top: 2rem;
    box-sizing: border-box;
    background: ${({ theme }) => theme.gray100};
    max-height: 100vh;
    overflow-y: auto;
  }

  .message-username {
    font-weight: 600;
  }
`

export default StyledFirebase
