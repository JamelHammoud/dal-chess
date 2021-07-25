import { FC, ReactNode } from 'react'
import { StyledButton } from '.'

type Props = {
  children?: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick?: (param?: any) => void;
}

const Button: FC<Props> = ({ children, className, isDisabled, onClick }) => {

  const handleChange = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <StyledButton 
      disabled={isDisabled}
      className={className} 
      onClick={() => handleChange()}
    >
      {children}
    </StyledButton>
  )
}

export default Button
