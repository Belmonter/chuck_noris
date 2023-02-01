import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element,
}

const StyledContainer = styled.div<ContainerProps>`
  max-width: 1280px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 15px;
`

function Container({children}: ContainerProps) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;
