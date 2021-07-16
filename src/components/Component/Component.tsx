import React, { FC } from 'react'
import { StyledComponent } from '.'

type Props = {
  prop?: string
}

const Component: FC<Props> = ({ prop }) => {
  return (
    <StyledComponent>
      Test Component
    </StyledComponent>
  )
}

export default Component
