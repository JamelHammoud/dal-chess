import styled from 'styled-components'

const StyledSignUp = styled.div`
  display: grid;
  grid-gap: 10px;
  max-width: 500px;
  margin: 2rem auto;

  .input-container {
    border: 1px solid ${({ theme }) => theme.gray300};
    height: 50px;
    padding: 0 1rem;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    height: 50px;
    border-radius: 3px;
    background: ${({ theme }) => theme.blue500};
    font-weight: 700;
    color: white;
  }

  .user-ranking {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;

    .user-ranking-select {
      border: 1px solid #D1D5DB;
      padding: 12px;
      border-radius: 5px;
      position: relative;
      text-align: center;
      height: 50px;
      display: grid;
      align-content: center;

      .user-ranking-title {
        display: block;
        font-size: 16px;
        font-weight: 500;
        color: #374151;
      }

      .user-ranking-value {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4px;
        font-size: 14px;
        color: #4B5563;

        i {
          font-style: normal;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04rem;
          padding: 2px 5px;
          border-radius: 4px;
          background: #F3F4F6;
          color: #6B7280;
          margin-right: 6px;
        }
      }

      input {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;

        &:checked {
          box-shadow: inset 0 0 0 1px #f59e0b, 0 0 0 1px #f59e0b;
          border-radius: 4px;
        }
      }
    }
  }
`

export default StyledSignUp
