import { useState } from "react";
import Header from "./components/Header.js";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.js";
import FeedbackStats from "./components/FeedbackStats.js";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}
