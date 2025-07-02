import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsFillFileEarmarkBinaryFill } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface Props {
  fileId: number;
  refetch: () => void;
}

const BlockchainTableDropdownButton = () => {
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
            <button className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              Download contract ABI
              <BsFillFileEarmarkBinaryFill className="ml-auto hidden group-data-focus:inline" />
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default BlockchainTableDropdownButton;
