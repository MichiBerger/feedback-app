import Header from "./components/Header.js";
import FeedbackItem from "./components/FeedbackItem.js";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}
