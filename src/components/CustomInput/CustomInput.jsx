import "./CustomInput.css";
export const CustomInput = ({ onChange, value }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="custom-input"
      type="text"
    />
  );
};
