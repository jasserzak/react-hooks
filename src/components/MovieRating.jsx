import React from "react";
import { Rating } from "flowbite-react";

const MovieRating = (props) => {
  const { rating, setRating = () => {} } = props;
  const stars = (star) => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= star) {
        starArray.push(<Rating.Star key={i} onClick={() => setRating(i)} />);
      } else {
        starArray.push(
          <Rating.Star filled={false} key={i} onClick={() => setRating(i)} />
        );
      }
    }
    return starArray;
  };

  return (
    <div>
      <Rating>{stars(rating)}</Rating>
    </div>
  );
};

export default MovieRating;
