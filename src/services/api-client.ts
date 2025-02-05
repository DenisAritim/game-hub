import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "82bb7853180e44d3a6dc69b378a15c33",
  },
});
