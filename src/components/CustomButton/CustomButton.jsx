import { buttonTypes } from "./ButtonTypes";
import "./CustomButton.css";

export const CustomButton = ({ onClick, buttonTitle, type }) => {
  return (
    <button
      style={buttonTypes[type]}
      onClick={onClick}
      className="custom-button"
    >
      {buttonTitle}
    </button>
  );
};
