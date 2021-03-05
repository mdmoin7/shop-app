import React from "react";

type ThemeProps = {
  changeTheme: (theme: string) => void;
};

const ThemeSwitch: React.FC<ThemeProps> = (props) => {
  // useState : allows you to use state functionality
  // state : initialize, setState
  //let [state_variable, setState]=React.useState(initial_value);
  let [themeSelected, updateTheme] = React.useState("light");
  // mounting, updating, unmounting
  React.useEffect(() => {
    console.log("EFFECT CALLED");
    document.body.className = "bg-" + themeSelected;
  });
  const update = (color: string) => {
    updateTheme(color);
    props.changeTheme(color);
  };

  if (themeSelected === "light") {
    return (
      <button onClick={() => update("dark")} className="btn">
        <i className="fas fa-moon text-secondary fa-2x"></i>
      </button>
    );
  }
  return (
    <button onClick={() => update("light")} className="btn">
      <i className="fas fa-sun text-warning fa-2x"></i>
    </button>
  );
};
export default ThemeSwitch;
