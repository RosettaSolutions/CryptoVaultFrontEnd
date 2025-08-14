import { FaPlus } from "react-icons/fa6";
import { Button } from "@headlessui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PropagateLoader } from "react-spinners";
import { useMessage } from "../contexts/MessageContext";
import { useCreateApiKey } from "../hooks/useCreateApiKey";
import { useGetApiKeysList } from "../hooks/useGetApiKeysList";
import NoMatchMessage from "../components/NoMatchCard/NoMatchMessage";
import CardTitleInfo from "../components/CardTitleInfo/CardTitleInfo";
import ApiKeysDetailsTable from "../components/ApiKeysDetailsTable/ApiKeysDetailsTable";

const ApiKeysPage = () => {
  const { data, loading, refetch } = useGetApiKeysList();
  const { createKey, loadingCreateKey } = useCreateApiKey();
  const { newMessage } = useMessage();

  async function handleNewApiKey() {
    if (loadingCreateKey) return;

    try {
      document.body.style.cursor = "wait";

      await createKey();
      await refetch();

      newMessage({
        messageType: "success",
        message: "New API Key created successfully.",
      });
    } finally {
      document.body.style.cursor = "default";
    }
  }

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        <CardTitleInfo
          title="API Keys"
          description="This page allows you to create and manage Keys to integrate our API to your service."
          counter={data?.number_of_keys}
        />
        {loading ? (
          <PropagateLoader color="#364153" />
        ) : data && data?.number_of_keys > 0 ? (
          <>
            <div className="flex h-fit items-center gap-3">
              <Button
                type="button"
                disabled={loadingCreateKey}
                aria-disabled={loadingCreateKey}
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                onClick={() => {
                  handleNewApiKey();
                }}
              >
                <FaPlus />
                New API Key
              </Button>
            </div>

            <ApiKeysDetailsTable ApiKeysList={data} refetch={refetch} />
          </>
        ) : (
          <div className="flex flex-col items-center bg-gray-50 shadow-xl rounded-md px-6 py-6">
            <NoMatchMessage
              title="You don't have any registered API Key yet."
              description="Click in the button below to create your first Key."
            />

            <Button
              type="button"
              disabled={loadingCreateKey}
              aria-disabled={loadingCreateKey}
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer mt-6"
              onClick={() => {
                handleNewApiKey();
              }}
            >
              <FaPlus />
              New API Key
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ApiKeysPage;
