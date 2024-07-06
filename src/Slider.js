import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { requests, IMAGE_URL, HEADER } from "./request";
import rightArrow from "./Images/right-arrow.png";
import leftArrow from "./Images/left-arrow.png";
import defautlBackdrop from "./Images/Backdrop.jpg";
import { SliderLoader } from "./SliderLoader";

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
      {loader ? (
        <SliderLoader />
      ) : (
        <div className='row-container'>
          <div className='row-title'>
            <h1>
              <a>{rowTitle}</a>
              <h2>Explore All</h2>
            </h1>

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
            <button
              className='btn btn-slider btn-left'
              onClick={() => onLeftClick()}
            >
              <div className='btn btn-slider-img-container'>
                <img src={leftArrow} alt='' />
              </div>
            </button>
            <div
              className='slider'
              style={{ transform: `translateX(${transform}%)` }}
            >
              {movies.map((movie) =>
                movie.backdrop_path ? (
                  <div
                    className='backdrop-card'
                    key={movie.id}
                    name={movie.original_title}
                  >
                    <img
                      loading='lazy'
                      className='backdrop-card-img'
                      src={`${IMAGE_URL}${movie.backdrop_path}`}
                      alt=''
                    />
                  </div>
                ) : (
                  <div
                    className='backdrop-card'
                    key={movie.id}
                    name={movie.original_title}
                  >
                    <img
                      loading='lazy'
                      className='backdrop-card-img'
                      src={defautlBackdrop}
                      alt=''
                    />
                  </div>
                )
              )}
            </div>
            <button
              className='btn btn-slider btn-right'
              onClick={() => onRightClick()}
            >
              <div className='btn btn-slider-img-container'>
                <img src={rightArrow} alt='' />
              </div>
            </button>
          </div>
        </div>
      )}
      {/* <div className='row-container'>
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
          <button
            className='btn btn-slider btn-left'
            onClick={() => onLeftClick()}
          >
            <div className='btn btn-slider-img-container'>
              <img src={leftArrow} alt='' />
            </div>
          </button>
          <div
            className={`slider`}
            style={{ transform: `translateX(${transform}%)` }}
          >
            {loader ? (
              <SliderLoader />
            ) : (
              movies.map((movie) =>
                movie.backdrop_path ? (
                  <div
                    className='backdrop-card'
                    key={movie.id}
                    name={movie.original_title}
                  >
                    <img
                      className='backdrop-card-img'
                      src={`${IMAGE_URL}${movie.backdrop_path}`}
                      alt=''
                    />
                  </div>
                ) : (
                  <div
                    className='backdrop-card'
                    key={movie.id}
                    name={movie.original_title}
                  >
                    <img
                      className='backdrop-card-img'
                      src={defautlBackdrop}
                      alt=''
                    />
                  </div>
                )
              )
            )}
          </div>
          <button
            className='btn btn-slider btn-right'
            onClick={() => onRightClick()}
          >
            <div className='btn btn-slider-img-container'>
              <img src={rightArrow} alt='' />
            </div>
          </button>
        </div>
      </div> */}
    </>
  );
};
{
  /*  */
}
