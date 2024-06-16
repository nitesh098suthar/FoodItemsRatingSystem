import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rats = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleResetRating = () => {
    setRating(null);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="star"
              size={50}
              color={(hover || rating) >= currentRating ? "yellow" : "gray"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <button onClick={handleResetRating} className="btn">Reset Rating</button>
    </div>
  );
};

export default Rats;
