/** @format */

import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className='swipebuttons'>
      <IconButton className='swipebuttons__repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipebuttons__left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipebuttons__star'>
        <StarIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipebuttons__right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipebuttons__lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
