import fetchTrending from '../../components/shared/fetchTrending';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function getMovie() {
      const { results } = await fetchTrending();
      const arrayMovie = results.map(({ title, name, id }) => {
        return (
          <li key={title || name}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        );
      });
      setTrendingMovies(arrayMovie);
    }
    getMovie();
  }, []);
  return <ul>{trendingMovies}</ul>;
};

export default Home;
