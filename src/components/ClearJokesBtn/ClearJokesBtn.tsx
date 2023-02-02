import React from 'react';
import Button from "../../styledComponents/Button/Button";
import {useAppDispatch} from "../../redux/hooks";
import {clearFavourites} from "../../redux/slice/JokesSlice";

function ClearJokesBtn() {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(clearFavourites());
  }

  return (
    <Button onClick={onClick}>
      <span>Clear List</span>
    </Button>
  );
}

export default ClearJokesBtn;
