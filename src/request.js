export const API_KEY = "965ed2df9cdb34f53c98192ed5443852";
export const HEADER = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

export const requests = {
  fetchTrending: `${HEADER}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${HEADER}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${HEADER}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${HEADER}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${HEADER}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${HEADER}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${HEADER}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `${HEADER}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
