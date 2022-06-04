import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchCrew from '../../components/shared/fetchCrew';
const Cast = () => {
  const [movieCrew, setMovieCrew] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetch() {
      const crew = await fetchCrew(id);
      setMovieCrew(crew.cast);
    }
    fetch();
  }, [id]);
  const castMarkup = movieCrew.map(element => {
    return <p key={element.name}>{element.name}</p>;
  });
  return <>{castMarkup}</>;
};

export default Cast;
