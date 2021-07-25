import styled from 'styled-components'

const StyledCalendar = styled.div`
  .calendar-full-header {
    height: 50px;
    border-bottom: 1px solid #d1d5db;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0 1px #00000014;
    position: sticky;
    z-index: 1;
    top: 0;
    background: white;
    padding: 0 1rem;

    .calendar-full-header-year {
      font-weight: 400;
      color: #1f2937;
      font-size: 22px;
    }

    .calendar-full-header-month {
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .calendar-full-title {
        font-weight: 600;
        color: #1f2937;
        width: 100px;
        text-align: center;
        letter-spacing: -0.02rem;
      }

      button {
        width: 25px;
        height: 25px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 12px;
        color: #6a7280;
        background: #f9fafb;
        transition: 0.2s;

        &:hover {
          background: #f3f4f6;
        }

        svg {
          height: 19px;
        }
      }
    }

    .today-btn {
      background: white;
      padding: 6px 10px;
      border-radius: 3px;
      color: #4b5563;
      border: 1px solid #d1d5db;
      transition: 0.2s;

      &:hover {
        background: #f3f4f6;
      }
    }
  }

  .calendar-full-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    height: calc(100vh - 51px);
  }
`

export default StyledCalendar
