import React from 'react';
import Button from "../../styledComponents/Button/Button";
import {useNavigate} from "react-router-dom";

function JokeListBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/')
  }

  return (
    <Button onClick={onClick}>
      <span>Joke List</span>
    </Button>
  );
}

export default JokeListBtn;
