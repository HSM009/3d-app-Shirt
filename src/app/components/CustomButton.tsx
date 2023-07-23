import React from "react";
import state from "../store/page";
import { useSnapshot } from "valtio";

interface CustomButtonProps {
  type: string;
  title: string;
  customStyles: string;
  handleClick: () => void;
}

const CustomButton = ({
  type,
  title,
  customStyles,
  handleClick,
}: CustomButtonProps) => {
  const snap = useSnapshot(state);
  const generateStyle = (type: CustomButtonProps["type"]) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} `}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
