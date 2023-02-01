import React, {useState} from 'react';
import styled from "styled-components";
import heart from '../../assets/img/svg/heart.svg'
import redHeart from '../../assets/img/svg/red_heart.svg'


interface JokeProps {
  joke: string
}

const StyledJoke = styled.div`
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

const StyledHeart = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  object-fit: contain;
`

function Joke({joke}: JokeProps) {
  const [active, setActive] = useState(false)

  const onHeartClick = () => {
    setActive((active) => !active)
  }

  return (
    <StyledJoke>
      <span>{joke}</span>
      <StyledHeart src={active ? redHeart : heart} alt="heart" onClick={onHeartClick}/>
    </StyledJoke>
  );
}

export default Joke;
