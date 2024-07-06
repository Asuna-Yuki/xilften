import React, { useEffect, useState } from "react";
import { Slider } from "./Slider";
import { requests, IMAGE_URL, HEADER } from "./request";
import axios from "axios";
import { PosterSlider } from "./PosterSlider";
import { svgInfo, svgPlay } from "./dataSVG";
import { SliderLoader } from "./SliderLoader";
import { SliderInline } from "./SliderInline";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  const carouselUrl = requests.fetchTrending;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(carouselUrl);
        setMovies(response.data.results);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getRandomNumber = () => {
    // Generate a random number between 0 and 20
    return Math.floor(Math.random() * 21);
  };

  return (
    <>
      <section className='carousel'>
        {loader ? (
          <div>LOADING</div>
        ) : (
          <>
            <div className='carousel-items'>
              <div className='carousel-info'>
                <div className='carousel-desc'></div>
                <div className='carousel-links'>
                  <button className='btn btn-carousel'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-name='Play'
                      aria-labelledby=':r5c:'
                      aria-hidden='true'
                    >
                      <path d={svgPlay} fill='currentColor'></path>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className='btn btn-carousel'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-name='CircleI'
                      aria-labelledby=':r5d:'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d={svgInfo}
                        fill='currentColor'
                      ></path>
                    </svg>
                    <span>More Info</span>
                  </button>
                </div>
              </div>
              <div className='carousel-slider'>
                <SliderInline
                  rowTitle={"Top Rated"}
                  url={requests.fetchTopRated}
                />
              </div>
            </div>
            <img
              className='carousel-img'
              src={`${IMAGE_URL}${movies[getRandomNumber()].backdrop_path}`}
              alt=''
            />
          </>
        )}
      </section>
      <SliderInline rowTitle={"Trending Now"} url={requests.fetchTrending} />
      <SliderInline rowTitle={"TV Shows"} url={requests.fetchPopularTV} />
      <SliderInline
        rowTitle={"Action Movies"}
        url={requests.fetchActionMovies}
      />
      <PosterSlider rowTitle={"Top Rated"} url={requests.fetchTopRated} />
      <SliderInline
        rowTitle={"Comedy Movies"}
        url={requests.fetchComedyMovies}
      ></SliderInline>

      {/* <Slider rowTitle={"Netflix Orignals"} url={requests.fetchNetflixOriginals} />
      <Slider rowTitle={"Top Rated"} url={requests.fetchTopRated} />
      <Slider rowTitle={"Action Movies"} url={requests.fetchActionMovies} />
      <Slider rowTitle={"Comedy Movies"} url={requests.fetchComedyMovies} />
      
      <Slider rowTitle={"Horror Movies"} url={requests.fetchHorrorMovies} />
      <Slider rowTitle={"Documantaries"} url={requests.fetchDocumantaries} /> */}

      {/* <SliderLoader /> */}
    </>
  );
};
