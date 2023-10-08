import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieTitles, setMovieTitles] = useState([]);

  const moviesPrices = (fetchedMovies) => {
    const myprice = [50, 100, 150, 200];
    let result = [];

    for (let i = 0; i < fetchedMovies.length; i++) {
      let priceIndex = i % myprice.length;
      result.push({ ...fetchedMovies[i], price: myprice[priceIndex] });
    }

    return result;
  };

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/search/movie?api_key=d5ab7fc26b1d7286e6674614ce58ea5a&query=a'
      )
      .then((response) => {
        const updatedMovies = moviesPrices(response.data.results);
        setMovies(updatedMovies);
        setLoading(false);

        const titles = updatedMovies.map((movie) => movie.title);
        setMovieTitles(titles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); 

  return { movies, loading, movieTitles };
};
