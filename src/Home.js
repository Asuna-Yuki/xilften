import React, { useEffect, useState } from "react";
import { Slider } from "./Slider";
import { requests, IMAGE_URL, HEADER } from "./request";
import axios from "axios";

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
          <img
            className='carousel-img'
            src={`${IMAGE_URL}${movies[getRandomNumber()].backdrop_path}`}
            alt=''
          />
        )}
      </section>
      <Slider rowTitle={"Trending Now"} url={requests.fetchTrending} />
      {/* <Slider rowTitle={"TV Shows"} url={requests.fetchPopularTV} /> */}
      <Slider
        rowTitle={"Netflix Orignals"}
        url={requests.fetchNetflixOriginals}
      />
      {/* <Slider rowTitle={"Top Rated"} url={requests.fetchTopRated} />
      <Slider rowTitle={"Action Movies"} url={requests.fetchActionMovies} />
      <Slider rowTitle={"Comedy Movies"} url={requests.fetchComedyMovies} />
      <Slider rowTitle={"Horror Movies"} url={requests.fetchHorrorMovies} />
      <Slider rowTitle={"Documantaries"} url={requests.fetchDocumantaries} /> */}
    </>
  );
};
