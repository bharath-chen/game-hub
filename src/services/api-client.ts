import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "397b1df890bf45aaa0b6c5a2b548e3a3",
  },
});
