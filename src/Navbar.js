import React, { useEffect, useState } from "react";
import logo from "./netflix-logo.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <a id='logo' to='/'>
        <img className='netflix-logo' src={logo} alt='' />
      </a>
      <nav>
        <ul className='navlink-1'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>TV Shows</a>
          </li>
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>New & Popular</a>
          </li>
          <li>
            <a>My List</a>
          </li>
          <li>
            <a>Browse by Language</a>
          </li>
        </ul>
        <ul className='navlink-2'>
          <li>
            <a>Search bar</a>
          </li>
          <li>
            <a>Notification</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
