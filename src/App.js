import { useState } from "react";
import Header from "./components/Header.js";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.js";
import FeedbackStats from "./components/FeedbackStats.js";
import FeedbackForm from "./components/FeedbackForm.js";

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

  function addFeedback(newFeedback) {
    console.log(newFeedback);
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}
