import styled from 'styled-components'

const StyledMatch = styled.div`
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

  .match-input {
    padding: 2rem 0;
    display: grid;
    grid-gap: 1rem;
    
    .id-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 22px;
      width: 22px;
      background: #f3f4f6;
      border-radius: 2px;
      color: #6a7280;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;
      pointer-events: none;
  
      svg {
        height: 16px;
      }
    }

    .opponent-display {
      padding: 1rem;
      border: 1px solid #d1d5db;
      border-radius: 3px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 20px minmax(0, 1fr);
      grid-gap: 1rem;
      align-items: center;
      
      .user-vs {
        display: flex;
        align-items: center;

        .avatar {
          margin-right: 10px;
        }
  
        .user-vs-name {
          letter-spacing: -0.03rem;
          color: #374151;
          font-weight: 500;
          word-break: break-all;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          display: -webkit-box;
        }

        .user-vs-rank {
          color: #6B7280;
          font-size: 13px;
          margin-top: -1px;
          display: block;
        }

        &:last-child {
          justify-content: flex-end;

          .user-vs-details {
            text-align: right;
          }

          .avatar {
            margin-right: 0px;
            margin-left: 10px;
          }
        }
      }

      .user-vs-label {
        font-size: 14px;
        font-weight: 500;
        color: #4B5563;
      }
    }

    .win-select {
      margin-top: 1rem;

      .win-select-label {
        display: block;
        font-size: 15px;
        color: #6B7280;
        margin-bottom: 5px;
      }
    
      .win-select-grid {
        background: #f3f4f6;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        grid-gap: 8px;
        border-radius: 3px;
      }
      
      .win-select-input {
        position: relative;
        background: white;
        padding: 9px 10px;
        border-radius: 3px;
        letter-spacing: -0.03rem;
        color: #374151;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 1px solid #d1d5db;
      
        span {
          padding-top: 2px;
        }
  
        input {
          position: absolute;
          top: -1px;
          left: -1px;
          right: 0;
          bottom: 0;
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 3px;
          cursor: pointer;
  
          &:checked {
            border: 1px solid #fabf24;
            box-shadow: inset 0 0 0 1px #fabf24;
          }
        }
      }
    }
  }

  .submit-btn {
    height: 40px;
    border-radius: 3px;
    font-weight: 600;
    color: #1f2937;
    padding-top: 3px;
    background: #fabf24;
    letter-spacing: -0.01rem;
    width: 100%;

    &:disabled {
      cursor: not-allowed;
      background: #f3f4f6;
      color: #6a7280;
    }
  }
`

export default StyledMatch
