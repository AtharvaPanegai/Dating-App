/** @format */

import React from "react";
import "./Header.css";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from "@mui/material";


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonOutlineTwoToneIcon fontSize='large' className='header__icon' />
      </IconButton>
      <img
        className = "header__logo"
        src='https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem-768x432.jpg'
        alt=''
      />
      <IconButton>
          <ForumIcon fontSize = "large" className = "header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
