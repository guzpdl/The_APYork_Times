import axios from "axios";

class InitAxios {
  constructor(path) {
    this.axios = axios.create({
      baseURL: `https://api.nytimes.com/svc/${path}`,
    });
  }
}

export default InitAxios;
