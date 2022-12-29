import InitAxios from "./initAxios.service";

class MostPopularAxios extends InitAxios {
  constructor() {
    super("mostpopular/v2/");
  }

  popularEmailedStories(period) {
    return this.axios
      .get(`emailed/${period}.json?api-key=S8mJXOYo0JX08AaivAeuOEmMNYmYpzCe`)
      .then((response) => response.data);
  }
  popularSharedStories(period) {
    return this.axios
      .get(`shared/${period}.json?api-key=S8mJXOYo0JX08AaivAeuOEmMNYmYpzCe`)
      .then((response) => response.data);
  }
  popularViewedStories(period) {
    return this.axios
      .get(`viewed/${period}.json?api-key=S8mJXOYo0JX08AaivAeuOEmMNYmYpzCe`)
      .then((response) => response.data);
  }
}

export default MostPopularAxios;
