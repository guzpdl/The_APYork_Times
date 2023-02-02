import InitAxios from "./initAxios.service";

const NYT_API_KEYS = process.env.REACT_APP_NYT_API_KEYS;

class MovieReviewsAxios extends InitAxios {
  constructor() {
    super("movies/v2/reviews/");
  }

  movieReviews(offsetx20) {
    return this.axios
      .get(`all.json?offset=${offsetx20}&api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }

  searchMovieReview(searchInput) {
    return this.axios
      .get(`search.json?query=${searchInput}&api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }
}

export default MovieReviewsAxios;
