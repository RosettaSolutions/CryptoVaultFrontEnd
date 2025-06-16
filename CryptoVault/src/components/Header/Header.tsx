import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="w-[80%] bg-gray-50 rounded-b-lg h-16 shadow-md flex items-center justify-between px-6 mb-6">
      <label className="transition-transform duration-300 hover:scale-110">
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input className="hidden peer" type="checkbox" />
          <div className="w-[50%] h-[2px] bg-gray-700 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
          <div className="w-[50%] h-[2px] bg-gray-700 rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
          <div className="w-[50%] h-[2px] bg-gray-700 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
        </div>
      </label>
        
      <Link
        to="/"
        className="font-mono font-semibold text-sky-400 transition-transform duration-300 hover:scale-105"
      >
        CryptoVault
      </Link>
      <Link
        to="/account"
        className="text-gray-700 transition-transform duration-300 hover:scale-110"
      >
        <HiUser className="w-6 h-6" />
      </Link>
    </header>
  );
};

export default Header;
