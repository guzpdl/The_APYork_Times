import InitAxios from "./initAxios.service";

const NYT_API_KEYS = process.env.REACT_APP_NYT_API_KEYS;

class BooksAxios extends InitAxios {
  constructor() {
    super("books/v3/");
  }

  booksByGenre(genre) {
    return this.axios
      .get(`lists/${genre}.json?api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }
}

export default BooksAxios;
