import React from 'react';
import styled from "styled-components";

interface TitleProps {
  text: string
}

const StyledTitle = styled.h2`
  text-align: center;
`

function Title(props: TitleProps) {
  return (
    <StyledTitle>
      {props.text}
    </StyledTitle>
  );
}

export default Title;
