import { useState } from "react";
import Button from "./Button.js";
import Card from "./shared/Card.js";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
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
