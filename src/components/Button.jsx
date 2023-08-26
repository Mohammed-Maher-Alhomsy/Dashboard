import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ color, bgColor, text, borderRadius, size, icon }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={() => setIsClicked(initialState)}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
