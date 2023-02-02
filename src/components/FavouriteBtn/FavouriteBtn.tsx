import React from 'react';
import Button from "../../styledComponents/Button/Button";
import {useNavigate} from "react-router-dom";

function FavouriteBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/favourites')
  }

  return (
    <Button onClick={onClick}>
      <span>Favourite List</span>
    </Button>
  );
}

export default FavouriteBtn;
