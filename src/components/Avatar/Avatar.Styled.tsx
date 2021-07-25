import styled from 'styled-components'

type StyledProps = {
  primary: string;
  secondary: string;
}

const StyledAvatar = styled.div<StyledProps>`
  background-color: ${({ secondary }) => secondary};
  height: 36px;
  width: 36px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
  text-align: center;
  user-select: none;
  letter-spacing: 0.1rem;
  border-radius: 50%;
  padding-top: 2px;
  box-sizing: border-box;
  position: relative;
  pointer-events: none;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    box-shadow: inset 0 0 0 1px #0000000d;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export default StyledAvatar
