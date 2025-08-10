import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";

const NotFoundPage = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-sky-400 text-5xl font-mono font-semibold">
        CryptoVault
      </h1>

      <h6 className="text-9xl mt-4 text-slate-700 font-bold italic animate-pulse">
        404
      </h6>

      <p className="text-lg text-gray-500 mt-4 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved. Don’t
        worry — let’s get you back on track.
      </p>

      <Link to="/login">
        <Button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-inner shadow-white/10 hover:bg-gray-600 mt-6 transition-all duration-200 cursor-pointer"
        >
          Go to Login Page
        </Button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
