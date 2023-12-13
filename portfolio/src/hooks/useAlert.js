import React, { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  const showALert = ({ text, type = "danger" }) =>
    setAlert({
      show: true,
      text,
      type,
    });

  const hideALert = () =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  return {
    alert,
    showALert,
    hideALert,
  };
};

export default useAlert;
