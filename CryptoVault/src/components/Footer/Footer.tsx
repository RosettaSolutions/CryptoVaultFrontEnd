import LogoRosetta from "../../assets/LogoRosetta.svg";
import { Link } from "react-router-dom";
import { COMPLETE_PATHS } from "../../routes/paths";
import { TermsOfUseDialog } from "@/components/TermsOfUseDialog";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-gray-700 p-6 flex items-center justify-center flex-col text-gray-50 font-mono shadow-md mt-7">
      <div>
        <img src={LogoRosetta} alt="" className="w-16 h-16 text-sky-400" />
      </div>
      <div></div>
      <div className="flex flex-col md:flex-row items-center font-mono font-light gap-3 md:gap-8 text-sm my-4">
        <TermsOfUseDialog className="text-gray-50 cursor-pointer transition-transform duration-300 hover:scale-105 hover:underline p-0 h-fit"/>
        <Link
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:underline"
          to={COMPLETE_PATHS.FEEDBACK}
        >
          Send us a feedback
        </Link>
      </div>
      <div className="text-center">
        <span className="text-gray-500 text-sm font-thin">
          © 2025 Developed by Rosetta. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
