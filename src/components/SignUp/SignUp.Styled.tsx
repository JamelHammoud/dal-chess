import styled from 'styled-components'

const StyledSignUp = styled.div`
  display: grid;
  grid-gap: 10px;
  max-width: 500px;
  margin: 2rem auto;

  input {
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
`

export default StyledSignUp
