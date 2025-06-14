import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchInput from "../components/SearchInput/SearchInput";
import Table from "../components/Table/Table";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";
import { Button } from "@headlessui/react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FilesPage = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center ">
        <CardTitleInfo
          title="Files"
          counter={1}
          description="This page shows your registered files and allows you to manage them."
        />
        <div className="flex h-fit items-center gap-3">
          <SearchInput />
          <Link to="/add_file">
            <Button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
            >
              <FaPlus />
              Register a file
            </Button>
          </Link>
        </div>
        <Table />
      </main>
      <Footer />
    </>
  );
};

export default FilesPage;
