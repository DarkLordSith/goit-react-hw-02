import React from "react";

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => (
  <div className="options">
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}

    {totalFeedback > 0 && (
      <button onClick={onReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
