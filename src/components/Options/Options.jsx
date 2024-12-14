import PropTypes from "prop-types";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className="options">
      <button className="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className="reset" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
