import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { PropagateLoader } from "react-spinners";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import SearchInput from "../components/SearchInput/SearchInput";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";
import NoMatchMessage from "../components/NoMatchCard/NoMatchMessage";
import { useListFilesInBlockchain } from "../hooks/useListFilesInBlockchain";
import BlockchainDetailsTable from "../components/BlockchainDetailsTable/BlockchainDetailsTable";

const BlockchainDetailsPage = () => {
  const { filesInBlockchainList, loading, refetch } = useListFilesInBlockchain();

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        <CardTitleInfo
          title="Blockchain Details"
          counter={filesInBlockchainList?.files.length || 0}
          description="On this page you see the registration details of the files that are implemented on the blockchain."
        />
        {loading ? (
          <PropagateLoader color="#364153" />
        ) : filesInBlockchainList && filesInBlockchainList?.files.length > 0 ? (
          <BlockchainDetailsTable filesOnTheBlockchain={filesInBlockchainList} refetch={refetch} />
        ) : (
          <>
            <div className="flex flex-col items-center bg-gray-50 shadow-xl rounded-md px-6 py-6 max-w-1/2 text-center">
              <NoMatchMessage
                title="You don't have any file implemented on the blockchain yet."
                description='You need at least one file registered on the blockchain to view this page. You can register a file by clicking on "Send to blockchain" in the actions column on the Files page, click the button below to go to the page.'
              />
              <Link to="/files">
                <Button type="submit" className="submit-btn">
                  Files page
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

export default BlockchainDetailsPage;
