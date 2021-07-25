import styled from 'styled-components'

type StyledProps = {
  error?: string;
  paddingLeft?: number;
}

const StyledLineInput = styled.div<StyledProps>`
  box-sizing: border-box;
  width: 100%;

  .input-header {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;

    label {
      display: block;
      font-size: 15px;
      color: #6B7280;
    }

    .input-error {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      color: #DC2626;

      svg {
        height: 15px;
        margin-right: 6px;
        margin-bottom: 2px;
      }
    }
  }

  .input-container {
    position: relative;
  }

  input {
    height: 38px;
    display: block;
    width: 100%;
    border-radius: 3px;
    border: 1px solid ${({ error }) => error ? '#DC2626' : '#d1d5db'};
    color: #1F2937;
    padding: 0 9px;
    box-sizing: border-box;
    ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}px`};
    transition: 0.2s;

    &:hover {
      border: 1px solid ${({ error }) => error ? '#DC2626' : '#9CA3AF'};
    }

    &:focus {
      border: 1px solid ${({ error }) => error ? '#DC2626' : '#1F2937'};
      box-shadow: 0 0 0 2px #00000026;
    }
  }
`

export default StyledLineInput
