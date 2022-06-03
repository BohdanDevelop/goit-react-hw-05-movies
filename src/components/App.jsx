import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetailsPage from '../pages/MovieDetailsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
