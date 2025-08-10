import { useEffect } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDeleteApiKey } from "../../hooks/useDeleteApiKey";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useUpdateApiKeyStatus } from "../../hooks/useUpdateApiKeyStatus";

interface Props {
  keyId: number;
  refetch: () => void;
}

const ApiKeysTableDropdownButton = ({ keyId, refetch }: Props) => {
  const { deleteKey, loadingDelete } = useDeleteApiKey();
  const { updateStatus, loadingUpdateKey } = useUpdateApiKeyStatus();

  useEffect(() => {
    if (loadingDelete || loadingUpdateKey) {
      document.body.style.cursor = "wait";
    } else {
      document.body.style.cursor = "default";
    }

    return () => {
      document.body.style.cursor = "default";
    };
  }, [loadingDelete, loadingUpdateKey]);

  const handleDeleteApiKey = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this API Key?"
    );
    if (confirmed) {
      await deleteKey(keyId);
      refetch();
    }
  };

  const handleUpdateKeyStatus = async () => {
    await updateStatus(keyId);
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
              disabled={loadingUpdateKey}
              onClick={handleUpdateKeyStatus}
              className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              Enable / Disable
              <FaPowerOff className="ml-auto hidden group-data-focus:inline" />
            </button>
          </MenuItem>
          <MenuItem>
            <button
              disabled={loadingDelete}
              onClick={handleDeleteApiKey}
              className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              Delete
              <MdDeleteForever className="ml-auto hidden group-data-focus:inline" />
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ApiKeysTableDropdownButton;
