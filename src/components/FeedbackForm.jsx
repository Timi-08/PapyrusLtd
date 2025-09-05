import React, { useState } from "react";

const FeedbackForm = ({ productId }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFeedback = {
      productId,
      name,
      rating,
      comment,
      timestamp: new Date().toISOString(),
    };

    const previousFeedback =
      JSON.parse(localStorage.getItem("feedBackInformation")) || [];

    const newFeedback = [...previousFeedback, userFeedback];

    localStorage.setItem("feedBackInformation", JSON.stringify(newFeedback));

    console.log("Saved to Local Storage: ", userFeedback);
    setSubmitted(true);
  };

  return (
    <div className="feedback-form">
      <h2> How can we improve ? Share your thoughts</h2>
      {submitted ? (
        <p>Thank you for your feedback</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
          <br />
          <label>
            Rating:
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="">Select</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="1">⭐️</option>
            </select>
          </label>
          <br />
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What do you think about our products and services...."
              rows="6"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
