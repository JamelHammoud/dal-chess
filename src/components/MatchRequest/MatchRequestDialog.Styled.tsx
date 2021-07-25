import styled from 'styled-components'

const StyledMatchRequestDialog = styled.div`
  background: #ECFDF5;
  border-radius: 3px;
  padding: 1rem;
  margin-top: 1rem;
  color: #1f2937;

  .match-actions-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    span {
      color: #1f2937;
      font-size: 14px;
      font-weight: 400;
    }

    .match-actions button {
      height: 36px;
      padding: 0 1rem;
      border-radius: 3px;
      margin-right: 10px;
      background: #1f2937;
      color: white;
  
      &.no-btn {
        background: #1f29371f;
        color: #1f2937;
      }
    }
  }
`

export default StyledMatchRequestDialog
