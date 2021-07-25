import styled from 'styled-components'

const StyledMatches = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #D1D5DB;
    padding-bottom: 18px;

    h1 {
      letter-spacing: -0.04rem;
      color: #1F2937;
      font-weight: 600;
    }
  }

  .match-list {
    margin: 1rem 0;
    display: grid;
    grid-gap: 1rem;
  }
`

export default StyledMatches
