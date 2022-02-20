import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import FeedbackList from "./components/FeedbackList.js";
import FeedbackStats from "./components/FeedbackStats.js";
import FeedbackForm from "./components/FeedbackForm.js";
import AboutPage from "./pages/AboutPage.js";
import AboutIconLink from "./components/AboutIconLink.js";
import { FeedbackProvider } from "./context/FeedbackContext.js";

export default function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}
