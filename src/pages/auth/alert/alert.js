import "./alert.css";

function ErrorAlert({ message, displayValue }) {
  return (
    <div
      className="alert alert-bg-error dflex align-items-start"
      style={{ display: displayValue ? "-webkit-box" : "none" }}
    >
      <span className="material-icons alert-info-icon alert-color-error mr-9">
        cancel
      </span>
      <div>
        <div className="alert-message">{`${message}.`}</div>
      </div>
    </div>
  );
}

export { ErrorAlert };
