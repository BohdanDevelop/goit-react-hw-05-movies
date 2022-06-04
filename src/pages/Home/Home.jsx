import fetchTrending from '../../components/shared/fetchTrending';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      const { results } = await fetchTrending();
      const arrayMovie = results.map(({ title, name, id }) => {
        return (
          <li key={title || name}>
            <Link
              state={{ from: location.pathname, search: location.search }}
              to={`/movies/${id}`}
            >
              {title || name}
            </Link>
          </li>
        );
      });
      setTrendingMovies(arrayMovie);
    }
    getMovie();
  }, [location.pathname, location.search]);
  return <ul>{trendingMovies}</ul>;
};

export default Home;
