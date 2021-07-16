import styled from 'styled-components'

const StyledUpcomingEvent = styled.div`
  background: #F3F4F6;
  border-radius: 3px;
  padding: 1rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 45px auto;
  grid-gap: 1rem;

  .calendar {
    width: 42px;
    height: 42px;
    border: 2px solid #DC2626;
    border-radius: 3px;
    background: white;

    .month {
      border-bottom: 2px solid #DC2626;
      text-align: center;
      font-weight: 900;
      font-size: 12px;
      letter-spacing: -0.02em;
      color: #DC2626;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 1px;
      background: #FEE2E2;
      text-transform: uppercase;
    }

    .day {
      height: 25px;
      justify-content: center;
      font-size: 20px;
      line-height: 6px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: #DC2626;
      font-weight: 700;
    }
  }

  .event-details {
    display: grid;
    align-content: space-between;

    .event-label {
      font-weight: 600;
      font-size: 12px;
      display: block;
      letter-spacing: 0.095rem;
      color: #6B7280;
    }

    .event-title {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.01rem;
      color: #6B7280;

      mark {
        background: transparent;
        font-weight: 600;
        color: #374151;
        letter-spacing: -0.015rem;
      }

      span {
        margin: 0px 5px;
      }
    }
  }
  
`

export default StyledUpcomingEvent
