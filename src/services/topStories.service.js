import InitAxios from "./initAxios.service";

class TopStoriesAxios extends InitAxios {
  constructor() {
    super("topstories/v2/");
  }

  homeStories() {
    return this.axios
      .get(`home.json?api-key=S8mJXOYo0JX08AaivAeuOEmMNYmYpzCe`)
      .then((response) => response.data);
  }
}

export default TopStoriesAxios;
