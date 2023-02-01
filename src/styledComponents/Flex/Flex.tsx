import React from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction: string,
  align: string,
  justify: string,
  margin: string,
  children: JSX.Element,
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  align-items: ${({align}) => align || 'stretch'};
  justify-content: ${({justify}) => justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
`

function Flex(props: FlexProps) {
  return (
    <StyledFlex {...props}>
      {props.children}
    </StyledFlex>
  )
}

export default Flex;
