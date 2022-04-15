import { Link } from "react-router-dom";
import "./linkbutton.styles.css";

function LinkButton({ to, text }) {
  return (
    < >
      <Link 
      to={to} 
      className="btn btn-secondary bg-grey m-sm lb-center" 
      style={{ width: "max-content" }}
      role="button"
      >
        {text}
      </Link>
    </>
  );
}

export { LinkButton };
