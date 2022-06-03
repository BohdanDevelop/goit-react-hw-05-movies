import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  params: {
    api_key: 'bf5a0d96c889a031df2402c1d39cdab8',
  },
});
const fetchMovieByName = async name => {
  const { data } = await instance.get('', {
    params: {
      query: name,
    },
  });

  return data;
};
export default fetchMovieByName;
