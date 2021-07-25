import styled from 'styled-components'

type StyledProps = {
  isActive?: boolean;
}

const StyledCalendarDay = styled.div<StyledProps>`
  padding: 1rem;
  background-color: ${({ isActive }) => isActive ? 'white' : '#F3F4F6'};
  border-right: 1px solid #D1D5DB;
  border-bottom: 1px solid #D1D5DB;
  position: relative;
  display: grid;
  align-content: space-between;

  .label {
    font-size: 22px;
    font-weight: 400;
    color: #D1D5DB;
  }

  .event-list {
    display: grid;
    grid-gap: 10px;

    .event {
      padding: 8px;
      background: #EFF6FF;
      border-radius: 3px;
      font-size: 14px;
      color: #1D4ED8;
      font-weight: 500;
    }
  }
`

export default StyledCalendarDay
