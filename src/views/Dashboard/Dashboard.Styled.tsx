import styled from 'styled-components'

const StyledDashboard = styled.div`
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

  .ranking {
    display: flex;
    align-items: center;

    h2 {
      color: #374151;
      font-weight: 500;
      font-size: 29px;
    }

    span {
      font-size: 14px;
      padding: 3px 6px;
      background: #F3F4F6;
      border-radius: 3px;
      color: #6B7280;
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
`

export default StyledDashboard
