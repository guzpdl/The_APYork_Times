import React, { useState } from "react";
import { useEffect } from "react";
import MovieReviewsAxios from "../../services/movies.service";
import { Col, Image, Row } from "react-bootstrap";

const Movie = () => {
  const movieReviewsAxios = new MovieReviewsAxios();

  const [movieRev, setMovieRev] = useState([]);

  const getMovieReviews = () => {
    movieReviewsAxios
      .movieReviews(0)
      .then((movieReviewsData) => {
        console.log(movieReviewsData.results);
        setMovieRev(movieReviewsData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieReviews();
  }, []);

  return movieRev.map((movieData, index) => {
    return (
      <Row key={index}>
        <Col>
          <p>{movieData.publication_date}</p>
          <a href={movieData.link.url} target="_blank" rel="noreferrer">
            Read Review
          </a>
        </Col>
        <Col>
          <h2>{movieData.display_title}</h2>
          <p>{movieData.mpaa_rating !== "" && movieData.mpaa_rating}</p>
          <p>{movieData.summary_short}</p>
          <p>By {movieData.byline.toUpperCase()}</p>
        </Col>
        <Col>
          <Image src={movieData?.multimedia?.src} style={{ width: "12rem" }} />
        </Col>
      </Row>
    );
  });
};

export default Movie;
