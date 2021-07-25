import styled from 'styled-components'

const StyledMatchItem = styled.div`
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 3px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 20px minmax(0, 1fr);
  grid-gap: 1rem;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  
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
      display: flex;
      align-items: center;

      &.up {
        mark {
          background: #ECFDF5;
          color: #047857;
        }
      }

      &.down {
        mark {
          background: #FEF2F2;
          color: #B91C1C;
        }
      }

      mark {
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        border-radius: 3px;
        margin-right: 6px;

        svg {
          height: 12px;
          margin-right: 4px;
        }
      }
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

      .user-vs-rank {
        justify-content: flex-end;

        mark {
          margin-right: 0px;
          margin-left: 6px;
        }
      }
    }
  }

  .user-vs-label {
    font-size: 14px;
    font-weight: 500;
    color: #4B5563;
  }
`

export default StyledMatchItem
