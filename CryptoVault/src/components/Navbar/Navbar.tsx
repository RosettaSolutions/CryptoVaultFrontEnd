import { IoKey } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaKeycdn } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { SiBnbchain } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { FaFileShield } from "react-icons/fa6";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useAuth } from "../../contexts/AuthContext";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { COMPLETE_PATHS } from "../../routes/paths";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="text-right">
      <Menu>
        {({ open }) => (
          <div>
            <MenuButton className="inline-flex items-center gap-2 rounded-md text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none cursor-pointer">
              <label
                className={"transition-transform duration-300 hover:scale-110"}
              >
                <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                  <input className="hidden peer" type="checkbox" />
                  <div
                    className={`w-[50%] h-[2px] bg-gray-700 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
                      open ? "rotate-[-45deg]" : ""
                    }`}
                  />
                  <div
                    className={`w-[50%] h-[2px] bg-gray-700 rounded-md transition-all duration-300 origin-center ${
                      open ? "hidden" : ""
                    }`}
                  />
                  <div
                    className={`w-[50%] h-[2px] bg-gray-700 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
                      open ? "rotate-[45deg]" : ""
                    }`}
                  />
                </div>
              </label>
            </MenuButton>

            <MenuItems
              anchor="bottom"
              className="ml-2 md:ml-0 w-54 origin-top-right rounded-xl border border-white/5 bg-gray-700 p-1 text-sm/6 text-gray-50 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.FILES);
                  }}
                >
                  Files
                  <FaFileShield className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.API_KEYS);
                  }}
                >
                  API Keys
                  <IoKey className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.BLOCKCHAIN);
                  }}
                >
                  Blockchain Details
                  <SiBnbchain className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.VALIDATION);
                  }}
                >
                  Validation
                  <FaFileCircleCheck className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.DECRYPTION);
                  }}
                >
                  Decryption
                  <FaKeycdn className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.BILLING);
                  }}
                >
                  Billing
                  <FaMoneyCheckDollar className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    navigate(COMPLETE_PATHS.CREDITS);
                  }}
                >
                  Credits
                  <GiTwoCoins className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                  <FiLogOut className="ml-auto hidden group-data-focus:inline" />
                </button>
              </MenuItem>
            </MenuItems>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
