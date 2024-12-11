import React from "react";

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className="feedback">
    <h2>Statistics</h2>
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive feedback: {positiveFeedbackPercentage}%</li>
    </ul>
  </div>
);

export default Feedback;
