import { FC, ReactNode } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { StyledLineInput } from '.'

type Props = {
  value?: any;
  label?: string;
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  icon?: ReactNode;
  error?: string;
  maxLength?: number;
  paddingLeft?: number;
  onChange?: (param: any) => void;
}

const LineInput: FC<Props> = ({ value, label, name, type, icon, error, maxLength, paddingLeft, onChange }) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <StyledLineInput error={error} paddingLeft={paddingLeft}>
      <div className="input-header">
        {label && <label htmlFor={name}>{label}</label>}
        {error && 
          <span className="input-error">
            <ExclamationCircleIcon/>
            {error}
          </span>
        }
      </div>
      <div className="input-container">
        {icon}
        <input 
          maxLength={maxLength}
          value={value || ''} 
          name={name} 
          type={type || 'text'} 
          lang="en"
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
      </div>
    </StyledLineInput>
  )
}

export default LineInput
