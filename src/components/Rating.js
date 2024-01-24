import { useState } from "react";
import "animate.css";
import IconStar from "../images/icon-star.svg";
import Illustration from "../images/illustration-thank-you.svg";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);

  //Array of available rate numbers
  const rates = [1, 2, 3, 4, 5];

  //Function after click submit button
  const handleClick = () => {
    setRating(value);
  };

  if (rating === 0) {
    return (
      <article className="rating-component">
        <div className="rating-icon">
          <img src={IconStar} alt="logo" />
        </div>
        <h3 className="rating-title">How did we do?</h3>
        <p className="rating-description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="rating-numbers">
          {rates.map((rate, index) => {
            return (
              <button
                key={index}
                className={
                  rate === value ? "rating-number-active" : "rating-number"
                }
                onClick={() => setValue(rate)}
              >
                {rate}
              </button>
            );
          })}
        </div>

        <button className="btn-submit" onClick={handleClick}>
          Submit
        </button>
      </article>
    );
  }

  return (
    <article className="result-component animate__animated animate__fadeInDown">
      <div className="result-illustration">
        <img src={Illustration} alt="illustration-thank-you" />
      </div>
      <div className="result-value">
        <p>You selected {value} out of 5</p>
      </div>
      <h3 className="result-title">Thank you!</h3>
      <p className="result-description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
};

export default Rating;
