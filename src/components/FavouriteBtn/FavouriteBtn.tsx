import React from 'react';
import Button from "../../styledComponents/Button/Button";
import {useNavigate} from "react-router-dom";

function FavouriteBtn() {
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/favourites')
  }

  return (
    <Button onClick={clickHandle}>
      <span>Favourite List</span>
    </Button>
  );
}

export default FavouriteBtn;
