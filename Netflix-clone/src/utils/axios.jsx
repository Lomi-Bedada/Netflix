import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  //   params: {
  //     api_key: "034a35104e7ea8bee424619a102dace4",
  //   },
});

// https:api.themoviedb.org/3/genre/movie/list?language=en
export default instance;
https://api.themoviedb.org/3/kGzFbGhp99zva6oZODW5atUtnqi.jpg 