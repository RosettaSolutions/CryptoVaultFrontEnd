import { useEffect } from "react";
import { GiCubes } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";
import { MdSimCardDownload } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDeleteFile } from "../../hooks/useDeleteFile";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useSendFileToBlockchain } from "../../hooks/useSendFileToBlockchain";
import { useDownloadEncryptedFile } from "../../hooks/useDownloadEncryptedFile";

interface Props {
  fileId: number;
  refetch: () => void;
}

const DropdownButton = ({ fileId, refetch }: Props) => {
  const { deleteEncryptedFile, loading } = useDeleteFile();
  const { downloadEncryptedFile } = useDownloadEncryptedFile();
  const { sendToBlockchain, loadingSend } = useSendFileToBlockchain();

  useEffect(() => {
    // console.log(loadingSend)
    if (loadingSend) {
      document.body.style.cursor = "wait";
    } else {
      document.body.style.cursor = "default";
    }

    return () => {
      document.body.style.cursor = "default";
    };
  }, [loadingSend]);

  const handleDeleteFile = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this file?"
    );
    if (confirmed) {
      await deleteEncryptedFile(fileId);
      refetch();
    }
  };

  const handleDownloadEncryptedFile = async () => {
    await downloadEncryptedFile(fileId);
  };

  const handleSendToBlockchain = async () => {
    await sendToBlockchain(fileId);
    refetch();
  };

  return (
    <div className="text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700 cursor-pointer">
          <HiOutlineDotsHorizontal />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-54 origin-top-right rounded-xl border border-white/5 bg-gray-700 p-1 text-sm/6 text-gray-50 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button
              disabled={loading}
              onClick={handleDeleteFile}
              className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              Delete
              <MdDeleteForever className="ml-auto hidden group-data-focus:inline" />
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={handleDownloadEncryptedFile}
              className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              Download encripted file
              <MdSimCardDownload className="ml-auto hidden group-data-focus:inline" />
            </button>
          </MenuItem>
          <MenuItem>
            <button
              disabled={loadingSend}
              onClick={handleSendToBlockchain}
              className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              Send to blockchain
              <GiCubes className="ml-auto hidden group-data-focus:inline" />
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default DropdownButton;
