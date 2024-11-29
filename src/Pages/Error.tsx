import { useRouteError, Link } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const Error = () => {
  const { statusText, message } = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mt-4">Page not found</p>
          <p className="text-gray-600 mt-2">
            {statusText || message || "Sorry, we couldn't find the page you're looking for."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            <HomeIcon className="w-4 h-4" />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
