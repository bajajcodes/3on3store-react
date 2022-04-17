import "./loader.styles.css";

function Loader({display="none", message=""}) {
  return (
    <div className="loader-container" style={{ display }}>
      <div className="loader"></div>
      <h1 className="loader-message">{`Loading ${message}...`}</h1>
    </div>
  );
}

export { Loader };
