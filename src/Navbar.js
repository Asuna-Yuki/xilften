import React, { useEffect, useState } from "react";
import logo from "./Images/netflix-logo.png";
import { svgNotification, svgSearch } from "./dataSVG";
import Miku from "./Images/wp4842721.jpg";

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
            <a>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-name='MagnifyingGlass'
                aria-labelledby=':R4p94m:'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={svgSearch}
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-name='Bell'
                aria-labelledby=':Rlp94m:'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={svgNotification}
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a>
              <div className='nav-img-container'>
                <img src={Miku} alt='' />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
