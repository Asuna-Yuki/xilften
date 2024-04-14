import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { requests, IMAGE_URL, HEADER } from "./request";
import rightArrow from "./right-arrow.png";
import leftArrow from "./left-arrow.png";
import defautlBackdrop from "./Backdrop.jpg";

export const Slider = ({ url, rowTitle }) => {
  const [loader, setLoader] = useState(true);
  const [movies, setMovies] = useState([]);
  const [numberOfCard, setNumberOfCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [transform, setTransform] = useState(0);
  // const url = requests.fetchTrending;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const response2 = await axios.get(url + "&page=2");
        // const response3 = await axios.get(url + "&page=3");

        const combinedResponse = [
          ...response.data.results,
          ...response2.data.results,
        ];

        combinedResponse.splice(30);

        setMovies(combinedResponse);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    setNumberOfCard(
      window.getComputedStyle(root).getPropertyValue("--card-per-screen")
    );

    const progressValue = movies.length / numberOfCard;
    setProgress(progressValue);
  }, [movies, numberOfCard]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const root = document.documentElement;

      if (screenWidth >= 800) {
        setNumberOfCard(
          window.getComputedStyle(root).getPropertyValue("--card-per-screen")
        );
      } else if (screenWidth <= 800) {
        setNumberOfCard(
          window.getComputedStyle(root).getPropertyValue("--card-per-screen")
        );
      }
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onRightClick = () => {
    if (transform <= progress * -100 + 100) {
      setTransform(0);
      return;
    }
    setTransform(transform - 100);
  };

  const onLeftClick = () => {
    if (transform === 0) {
      setTransform(progress * -100 + 100);
      return;
    }
    setTransform(transform + 100);
  };

  return (
    <>
      <div className='row-container'>
        <div className='row-title'>
          <h1>
            <a>{rowTitle}</a>
          </h1>
          <h2>Explore All</h2>
          <div className='progress-bar-container'>
            {!loader ? (
              Array.from({ length: progress }, (_, index) => (
                <div key={index} className='progress-bar'></div>
              ))
            ) : (
              <div>LOADING</div>
            )}
          </div>
        </div>

        <div className='slider-container'>
          <button className='btn btn-left' onClick={() => onLeftClick()}>
            <img src={leftArrow} alt='' />
          </button>
          <div
            className={`slider`}
            style={{ transform: `translateX(${transform}%)` }}
          >
            {loader ? (
              <div>LOADING</div>
            ) : (
              movies.map((movie) =>
                movie.backdrop_path ? (
                  <div
                    className='card'
                    key={movie.id}
                    name={movie.original_title}
                  >
                    <img
                      className='card-img'
                      src={`${IMAGE_URL}${movie.backdrop_path}`}
                      alt=''
                    />
                  </div>
                ) : (
                  <div
                    className='card'
                    key={movie.id}
                    name={movie.original_title}
                  >
                    <img className='card-img' src={defautlBackdrop} alt='' />
                  </div>
                )
              )
            )}
          </div>
          <button className='btn btn-right' onClick={() => onRightClick()}>
            <img src={rightArrow} alt='' />
          </button>
        </div>
      </div>
    </>
  );
};
