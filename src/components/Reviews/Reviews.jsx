import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchReview from '../shared/fetchReview';
const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    async function fetch() {
      const reviewFetch = await fetchReview(id);
      console.log(reviewFetch.results);
      setReview(reviewFetch.results);
    }
    fetch();
  }, [id]);
  const reviewsMarkup = review.map(({ author, content }) => {
    return (
      <li key={author}>
        <p>Author: {author}</p>
        <p>review: {content}</p>
      </li>
    );
  });
  const markUp = review.length ? (
    <ul>{reviewsMarkup}</ul>
  ) : (
    <h3>There are no reviews</h3>
  );
  return <>{markUp}</>;
};
export default Reviews;
