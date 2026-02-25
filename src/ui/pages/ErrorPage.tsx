import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="text-center space-y-6">
        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-blue-600 dark:text-blue-500">
          404
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            The page you're looking for doesn’t exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-medium
                     hover:bg-blue-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-offset-gray-900"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
