import React, { useEffect, useState } from "react";
import axios from "axios";
import { requests, IMAGE_URL, HEADER } from "./request";

export const Slider = () => {
  const [loader, setLoader] = useState(true);
  const [image, setImage] = useState("");
  const url = "https://www.omdbapi.com/?i=tt3896198&apikey=966ff616";
  const url_2 = requests.fetchTrending;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url_2);
        console.log(IMAGE_URL + response.data.results[0].backdrop_path);
        setImage(response.data.results[0].backdrop_path);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='slider-container'>
        <h1>
          <a>Top 10 Movies in India Today</a>
        </h1>
        <h2>Explore All</h2>

        <div className='slider'>
          <div className='card'>
            {loader ? (
              <div>LOADING</div>
            ) : (
              <img src={`${IMAGE_URL}${image}`} alt='' />
            )}
          </div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
        </div>
      </div>
    </>
  );
};
