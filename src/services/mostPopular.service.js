import InitAxios from "./initAxios.service";

const NYT_API_KEYS = process.env.REACT_APP_NYT_API_KEYS;

class MostPopularAxios extends InitAxios {
  constructor() {
    super("mostpopular/v2/");
  }

  popularEmailedStories(period) {
    return this.axios
      .get(`emailed/${period}.json?api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }
  popularSharedStories(period) {
    return this.axios
      .get(`shared/${period}.json?api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }
  popularViewedStories(period) {
    return this.axios
      .get(`viewed/${period}.json?api-key=${NYT_API_KEYS}`)
      .then((response) => response.data);
  }
}

export default MostPopularAxios;
