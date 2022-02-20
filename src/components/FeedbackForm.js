import { useState } from "react";
import Button from "./Button.js";
import Card from "./shared/Card.js";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  function handleTextChange(event) {
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}
