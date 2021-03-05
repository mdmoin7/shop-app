import React from "react";

export default function Footer(props: any) {
  const color = props.theme === "light" ? "text-dark" : "text-white";

  return (
    <footer
      className={`shadow-sm p-4 ${color} d-flex align-items-center justify-content-between`}
    >
      <>&copy; {new Date().getFullYear()} Shop App </>
      <i className="fab fa-amazon-pay fa-2x"></i>
    </footer>
  );
}
