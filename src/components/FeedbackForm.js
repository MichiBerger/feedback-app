import { useContext, useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext.js";
import Button from "./Button.js";
import FeedBackRating from "./FeedBackRating.js";
import Card from "./shared/Card.js";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { addFeedback, feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function handleTextChange(event) {
    if (text === "") {
      setBtnDisabled(true);
      setErrorMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setErrorMessage("You have to type at least 10 characters");
      setBtnDisabled(true);
    } else {
      setErrorMessage(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      addFeedback(newFeedback);
      setText("");
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedBackRating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <label htmlFor="review"></label>
          <input
            onChange={handleTextChange}
            id="review"
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {errorMessage && <p className="message">{errorMessage}</p>}
      </form>
    </Card>
  );
}
