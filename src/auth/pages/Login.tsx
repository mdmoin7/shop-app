import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { createSession } from "../userSlice";
import { useNavigate, Link } from "react-router";
import { useState } from "react";

type Props = {
  mode: "login" | "signup";
};

function Login({ mode }: Props) {
  const isSignup = mode === "signup";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: isSignup
      ? Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required")
      : Yup.string().notRequired(),
  });

  const handleSubmit = async (values: any, setSubmitting: any) => {
    setApiError(null);

    try {
      let res;
      if (isSignup) {
        res = await UserService.register(values.email, values.password);
      } else {
        res = await UserService.login(values.email, values.password);
      }

      dispatch(createSession(res.data));
      navigate("/");
    } catch (e: any) {
      setApiError(e?.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) =>
            handleSubmit(values, setSubmitting)
          }
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="flex flex-col gap-5">
              {/* API Error */}
              {apiError && (
                <div className="text-sm text-red-500 text-center">
                  Invalid Login Credentials
                </div>
              )}

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`px-3 py-2 rounded-md border text-sm 
                    bg-white dark:bg-gray-700 
                    text-gray-800 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`px-3 py-2 rounded-md border text-sm 
                    bg-white dark:bg-gray-700 
                    text-gray-800 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>

              {/* Confirm Password (Signup Only) */}
              {isSignup && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className={`px-3 py-2 rounded-md border text-sm 
                      bg-white dark:bg-gray-700 
                      text-gray-800 dark:text-white
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md 
                  text-sm font-medium transition-colors duration-200
                  disabled:opacity-50"
              >
                {isSubmitting
                  ? "Processing..."
                  : isSignup
                    ? "Sign Up"
                    : "Login"}
              </button>

              {/* Switch Mode */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    Don’t have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-600 hover:underline"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
