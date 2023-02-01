import React from 'react';
import styled from "styled-components";

interface ButtonProps {
  children: JSX.Element,
  onClick?: Function,
}

const StyledButton = styled.button`
  cursor: pointer;
  height: 30px;
  max-width: 200px;
  padding: 8px;
  border-radius: 4px;
  background-color: #a9eaa0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`

function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={() => props.onClick ? props.onClick() : null}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
