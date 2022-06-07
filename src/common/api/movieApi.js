import axios from "axios";

//creating the base url
export default axios.create({
  baseURL: " https://www.omdbapi.com",
});
