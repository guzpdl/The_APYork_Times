import React from "react";
import { useEffect } from "react";
import MovieReviewsAxios from "../../services/movies.service";

const Movie = () => {
  const movieReviewsAxios = new MovieReviewsAxios();

  const getMovieReviews = () => {
    movieReviewsAxios
      .movieReviews(0)
      .then((movieReviewsData) => {
        console.log(movieReviewsData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieReviews();
  }, []);

  return <div>Movie</div>;
};

export default Movie;
