import axios from 'axios';

class DataApi {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.data = null;
  }

  async requestData() {
    await axios.get(this.endpoint)
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getData() {
    return this.data;
  }
}

export default DataApi;