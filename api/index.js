import config from '../api/config'
import axios from 'axios';

export default {
  getPosts () {
    console.log("axios to posts");
    return axios.get(config.baseUrl + '/posts')
    .then(result => {
      console.log(result)
    })
  }
}
