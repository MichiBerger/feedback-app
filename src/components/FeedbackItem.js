import { useState } from "react";

export default function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is a sample of our feedback item');
  
  function handleClick(){
    setRating(prev => {
      return prev + 1
    })
  }

  return (
    <div className="card">
      <div class="num-display">{rating}</div>
      <div class="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
