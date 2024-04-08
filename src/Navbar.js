import React from "react";
import logo from "./netflix-logo.png";

export const Navbar = () => {
  return (
    <header>
      <a id='logo' to='/'>
        <img src={logo} alt='' />
      </a>
      <nav>
        <ul className='navlink-1'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New&Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
        <ul className='navlink-2'>
          <li>Search bar</li>
          <li>Notification</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};
