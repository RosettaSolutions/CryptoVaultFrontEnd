import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="w-[80%] bg-gray-50 rounded-b-lg h-16 shadow-md flex items-center justify-between px-6 mb-6">
      <Navbar />
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
