import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "this is from context - nummer 2",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //Add Feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }
  //Delete Feedback
  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  //Edit Feedback
  function editFeedback(item) {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  }
  //Update FeedbackItem
  const updateFeedback = (id, uupdatedItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? {...item, ...uupdatedItem} : item )));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
