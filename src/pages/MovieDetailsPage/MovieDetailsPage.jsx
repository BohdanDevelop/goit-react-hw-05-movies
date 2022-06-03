import { useParams, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMovieById from '../../components/shared/fetchMovieById';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import style from './MovieDetailsPage.module.scss';

const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  useEffect(() => {
    async function fetchMovie() {
      const data = await fetchMovieById(id);

      setMovieInfo(data);
    }
    fetchMovie();
  }, [id]);
  const genres = movieInfo?.genres?.map(element => (
    <p className={style.heading} key={element.name}>
      {element.name}
    </p>
  ));

  return (
    <>
      <button className={style.back} type="button" onClick={goBack}>
        Go back
      </button>
      <h2 className={style.heading}>{movieInfo.original_title}</h2>
      <p className={style.heading}>User score: {movieInfo.vote_average}</p>
      <h2 className={style.heading}>Overview</h2>
      <p className={style.heading}>{movieInfo.overview}</p>
      <h2 className={style.heading}>Genres</h2>
      {genres}

      <img
        className={style.image}
        src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
        alt="poster"
        width="500"
      />
      <h4 className={style.heading}>Additional information</h4>
      <div className={style.divLink}>
        <Link className={style.link} to={`/movies/${id}/cast`} replace>
          Cast
        </Link>
        <Link className={style.link} to={`/movies/${id}/reviews`} replace>
          Reviews
        </Link>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
export default MovieDetailsPage;
