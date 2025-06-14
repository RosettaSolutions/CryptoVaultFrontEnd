import LogoRosetta from "../../assets/LogoRosetta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-gray-700 p-6 flex items-center justify-center flex-col text-gray-50 font-mono shadow-md mt-7">
      <div>
        <img src={LogoRosetta} alt="" className="w-16 h-16 text-sky-400" />
      </div>
      <div></div>
      <div className="flex font-mono font-light gap-8 text-sm my-4">
        <Link
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:underline"
          to=""
        >
          Terms of Use
        </Link>
        <Link
          className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:underline"
          to=""
        >
          Recommend an improvement
        </Link>
        <Link
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:underline"
          to=""
        >
          Report a Bug
        </Link>
      </div>
      <div>
        <span className="text-gray-500 text-sm font-thin">
          © 2025 Developed by Rosetta. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
