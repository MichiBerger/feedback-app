import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem.js";

export default function FeedbackList({ feedback }) {
  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};
