import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '22202d4a81444de29019d7dff4b25343'
  }
})