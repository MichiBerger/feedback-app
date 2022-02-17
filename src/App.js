import { useState } from "react";
import Header from "./components/Header.js";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.js";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
