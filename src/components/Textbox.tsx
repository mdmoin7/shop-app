import React from "react";

type Props = {
  label: string;
  type: "text" | "number" | "password";
  valueChange: (val: string) => void;
};

const Textbox: React.FC<Props> = ({ label, type, valueChange }) => {
  let [touched, setTouched] = React.useState(false);
  let [value, setValue] = React.useState("");
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-control"
        type={type}
        onBlur={(e) => {
          setTouched(true);
          setValue(e.currentTarget.value);
          valueChange(e.currentTarget.value);
        }}
      />
      {touched && value === "" ? (
        <small className="text-danger">This field is required</small>
      ) : null}
    </div>
  );
};
export default Textbox;
