import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { COMPLETE_PATHS } from "@/routes/paths";

const UnderConstructionPage = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-sky-400 text-3xl md:text-5xl font-mono font-semibold">
        CryptoVault
      </h1>

      <h6 className="text-4xl md:text-9xl mt-4 text-slate-700 font-bold italic animate-pulse">
        Under Construction
      </h6>

      <p className="text-lg text-gray-500 mt-4 max-w-md">
        We’re working hard to bring you this new feature. <br />
        Stay tuned — it’ll be available very soon!
      </p>

      <Link to={COMPLETE_PATHS.FILES}>
        <Button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-inner shadow-white/10 hover:bg-gray-600 mt-6 transition-all duration-200 cursor-pointer"
        >
          Go Back to File Page
        </Button>
      </Link>
    </main>
  );
};

export default UnderConstructionPage;
