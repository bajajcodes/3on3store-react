export function getIconType(alertType) {
  if (alertType === "success") {
    return "check_circle";
  } else if (alertType === "danger") {
    return "error";
  } else if (alertType === "info") {
    return "info";
  }

  return "";
}
export function getColorAndBackground(alertType) {
  if (alertType === "success") {
    return {
      background: "alert-bg-success",
      color: "alert-color-success"
    };
  } else if (alertType === "danger") {
    return {
      background: "alert-bg-error",
      color: "alert-color-error"
    };
  } else if (alertType === "info") {
    return {
      background: "alert-bg-info",
      color: "alert-color-info"
    };
  }
  return { background: "", color: "" };
}
