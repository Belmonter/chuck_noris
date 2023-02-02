import styled from "styled-components";

export const Styles = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  object-fit: contain;
`

export const StyledJoke = styled.div`
  padding: 5px;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  border: 1px solid green;
  border-radius: 5px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`
