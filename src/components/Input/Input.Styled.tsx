import styled from 'styled-components'

const StyledInput = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 2rem;

  input[type="text"] {
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

  .secondary-button {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.gray500};
    border: 1px solid ${({ theme }) => theme.gray300};
  }
`

export default StyledInput
