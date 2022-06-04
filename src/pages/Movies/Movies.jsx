import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import fetchMovieByName from '../../components/shared/fetchMovieByName';
import { nanoid } from 'nanoid';
import style from './Movies.module.scss';
const Movies = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const isFirstRender = useRef(true);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = useCallback(evt => {
    const value = evt.target.value;
    setInput(value);
  }, []);
  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      if (input) {
        setQuery(input);
        setInput('');
        setSearchParams({
          query: input,
        });
      }
    },
    [input, setSearchParams]
  );
  useEffect(() => {
    async function fetch() {
      const movie = await fetchMovieByName(query);
      setMovie(movie.results);
    }
    if (!isFirstRender.current && query) {
      fetch();
    }
    isFirstRender.current = false;
    const params = searchParams.get('query');
    if (params) {
      setQuery(params);
    }
  }, [query, searchParams]);
  const movieMarkup = useMemo(() => {
    return () => {
      const markup = movie.map(({ title, id }) => (
        <li key={nanoid()}>
          <Link
            state={{ from: location.pathname, search: location.search }}
            className={style.link}
            to={`/movies/${id}`}
          >
            {title}
          </Link>
        </li>
      ));
      return markup;
    };
  }, [movie, location.pathname, location.search]);
  return (
    <>
      <form
        autoComplete="off"
        className={style.form}
        action=""
        onSubmit={handleSubmit}
      >
        <input
          className={style.input}
          value={input}
          onChange={handleChange}
          type="text"
          name="movie"
        />
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
      <ul className={style.movieUl}>{movieMarkup()}</ul>
    </>
  );
};

export default Movies;
