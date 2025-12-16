import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@headlessui/react";
import Table from "../components/Table/Table";
import { PropagateLoader } from "react-spinners";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useGetFilesList } from "../hooks/useGetFilesList";
import SearchInput from "../components/SearchInput/SearchInput";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";
import NoMatchMessage from "../components/NoMatchCard/NoMatchMessage";
import { COMPLETE_PATHS } from "@/routes/paths";

const FilesPage = () => {
  const { filesList, loading, refetch } = useGetFilesList();

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        {loading ? (
          <PropagateLoader color="#364153" />
        ) : filesList && filesList?.total > 0 ? (
          <>
            <CardTitleInfo
              title="Files"
              counter={filesList.total}
              description="This page shows your registered files and allows you to manage them."
            />
            <div className="flex h-fit items-center gap-3">
              <SearchInput />
              <Link to={COMPLETE_PATHS.ADD_FILE}>
                <Button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                >
                  <FaPlus />
                  Register a file
                </Button>
              </Link>
            </div>
            <Table filesList={filesList} refetch={refetch} />
          </>
        ) : (
          <>
            <CardTitleInfo
              title="Files"
              counter={0}
              description="This page shows your registered files and allows you to manage them."
            />
            <div className="flex flex-col items-center bg-gray-50 shadow-xl rounded-md px-6 py-6">
              <NoMatchMessage
                title="You don't have any registered file yet."
                description="You need at least one file to see this page."
              />
              <Link to={COMPLETE_PATHS.ADD_FILE}>
                <Button type="submit" className="submit-btn">
                  Register a file
                </Button>
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default FilesPage;
