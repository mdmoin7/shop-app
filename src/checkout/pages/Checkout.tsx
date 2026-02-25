import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Card from "../../ui/components/Card";

function Checkout() {
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const saveData = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const emailValue = emailRef.current?.value || "";

    // Basic validation
    if (!emailValue) {
      setEmailError("Email is required");
      return;
    }

    setEmailError("");

    console.log("form submission logic here", name, emailValue);
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const nameError =
    name === ""
      ? "Name is required"
      : name.length > 0 && name.length < 3
        ? "Name must be at least 3 characters long"
        : "";

  return (
    <Card>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Checkout
        </h1>

        <form className="flex flex-col gap-5" onSubmit={saveData} noValidate>
          {/* Controlled Input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`px-3 py-2 rounded-md border text-sm
                bg-white dark:bg-gray-700
                text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  nameError
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
            />
            {nameError && (
              <small className="text-red-500 text-xs">{nameError}</small>
            )}
          </div>

          {/* Uncontrolled Input (ref-based) */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              className={`px-3 py-2 rounded-md border text-sm
                bg-white dark:bg-gray-700
                text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  emailError
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
            />
            {emailError && (
              <small className="text-red-500 text-xs">{emailError}</small>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md
                       text-sm font-medium transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       dark:focus:ring-offset-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </Card>
  );
}

export default Checkout;
