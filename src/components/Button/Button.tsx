import { FC, ReactNode } from 'react'
import { StyledButton } from '.'

type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: (param?: any) => void;
}

const Button: FC<Props> = ({ children, className, onClick }) => {

  const handleChange = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <StyledButton 
      className={className} 
      onClick={() => handleChange()}
    >
      {children}
    </StyledButton>
  )
}

export default Button
