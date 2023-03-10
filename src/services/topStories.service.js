import InitAxios from "./initAxios.service";

const NYT_API_KEYS = process.env.REACT_APP_NYT_API_KEYS;

class TopStoriesAxios extends InitAxios {
  constructor() {
    super("topstories/v2/");
  }

  homeStories() {
    return this.axios
      .get(`home.json?api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }
}

export default TopStoriesAxios;
