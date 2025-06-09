import { MdSimCardDownload } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { TbWorldUpload } from "react-icons/tb"; // Send to blockchain.
import { SiBnbchain } from "react-icons/si";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaCubes } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { GrClose } from "react-icons/gr";




const Table = () => {
  return (
    <table className="table-auto bg-gray-50 shadow-xl rounded-md mt-6 w-4/5">
      <thead className="text-gray-700 font-mono font-semibold text-sm border-b border-gray-200">
        <tr className="">
          <th className="px-4 py-3">ID</th>
          <th className="px-4 py-3">File name</th>
          <th className="px-4 py-3">Date and Time</th>
          <th className="px-4 py-3">In blockchain ?</th>
          <th className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 font-sans font-extralight text-sm">

        <tr className="text-center align-middle">
          <td className="py-3">1</td>
          <td className="py-3">
            Nome exemplo
            <span className="text-gray-500 font-semibold">.png</span>
          </td>
          <td className="py-3">21/03/2025 20:00:23</td>
          <td className="py-3">
            <div className="flex justify-center">
              <FaCheck className="text-green-500" />
            </div>
          </td>
          <td className="py-3 flex justify-center">
            <button className="w-8 h-8 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <MdSimCardDownload className="w-8 h-8" />
            </button>
            <button className="w-8 h-8 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <MdDeleteForever className="w-full h-full" />
            </button>
            <button className="w-8 h-8 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <FaCubes className="w-full h-full" />
            </button>
          </td>
        </tr>

        <tr className="text-center align-middle">
          <td className="py-3">1</td>
          <td className="py-3">
            Nome exemplo
            <span className="text-gray-500 font-semibold">.png</span>
          </td>
          <td className="py-3">21/03/2025 20:00:23</td>
          <td className="py-3">
            <div className="flex justify-center">
              <GrClose className="text-red-500" />
            </div>
          </td>
          <td className="py-3 flex justify-center">
            <button title="Download" className="w-8 h-8 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <MdSimCardDownload className="w-8 h-8" />
            </button>
            <button className="w-8 h-8 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <MdDeleteForever className="w-full h-full" />
            </button>
            <button className="w-8 h-8 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <FaCubes className="w-full h-full" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
