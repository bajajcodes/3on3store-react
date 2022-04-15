import "./alert.styles.css";
import { useAlert } from "context";
import { getIconType, getColorAndBackground } from "./alert.helper";

function Alert() {
  const { alertState } = useAlert();
  const icon = getIconType(alertState.type);
  const { background, color } = getColorAndBackground(alertState.type);

  return (
    <div
      className={`alert dflex align-items-center ${background}`}
      style={{ display: alertState.display }}
    >
      <span className={`material-icons alert-info-icon mr-9 ${color}`}>
        {icon}
      </span>
      <div className="alert-content dflex flex-col align-items-start mr-auto">
        <div className="alert-message font-wt-700">{alertState.title}</div>
        <div className="alert-description mt-3">{alertState.description}</div>
      </div>
    </div>
  );
}

export { Alert };
