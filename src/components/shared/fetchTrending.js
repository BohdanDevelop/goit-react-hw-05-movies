import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/day',
  params: {
    api_key: 'bf5a0d96c889a031df2402c1d39cdab8',
  },
});

const fetchTrending = async () => {
  const { data } = await instance.get('');
  return data;
};

export default fetchTrending;
