function showAlert(alertDispatch, title, description, type) {
  alertDispatch({
    type: "SHOW_ALERT",
    payload: {
      title: title,
      description: description,
      type: type,
      display: "flex",
    },
  });
}

function hideAlert(alertDispatch) {
  setTimeout(() => {
    alertDispatch({ type: "HIDE_ALERT" });
  }, 2000);
}

export { showAlert, hideAlert };
