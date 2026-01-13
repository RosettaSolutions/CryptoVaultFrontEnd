import { GrClose } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import DropdownButton from "../DropdownButton/DropdownButton";
import type { EncryptedFilesList } from "../../types/EncryptedFilesList";

type Props = {
  filesList: EncryptedFilesList;
  refetch: () => void;
};

const Table = ({ filesList, refetch }: Props) => {
  return (
    <div className="w-11/12 md:w-4/5 overflow-x-auto shadow-xl rounded-md mt-7">
      <table className="w-full table-auto bg-gray-50">
        <thead className="text-gray-700 font-mono font-semibold text-xs md:text-sm border-b border-gray-200">
          <tr className="">
            <th className="px-2 py-2 md:px-4 md:py-3 flex items-center justify-center gap-0.5">
              ID
            </th>
            <th className="px-2 py-2 md:px-4 md:py-3">File name</th>
            <th className="px-2 py-2 md:px-4 md:py-3">Date and Time</th>
            <th className="px-2 py-2 md:px-4 md:py-3">In blockchain ?</th>
            <th className="px-2 py-2 md:px-4 md:py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 font-sans font-extralight text-xs md:text-sm">
          {filesList?.files?.map((file) => (
            <tr className="text-center align-middle" key={file.file_id}>
              <td className="py-2 md:py-3">{file.file_id}</td>
              <td className="py-2 md:py-3">
                {file.refered_file}
                {/* <span className="text-gray-500 font-semibold">.png</span> */}
              </td>
              <td className="py-2 md:py-3">
                {new Date(file.created_at).toLocaleString("en-US")}
              </td>
              <td className="py-2 md:py-3">
                <div className="flex justify-center">
                  {file.in_blockchain ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <GrClose className="text-red-500" />
                  )}
                </div>
              </td>
              <td className="py-2 md:py-3">
                <div className="h-full w-full flex justify-center items-center">
                  <DropdownButton fileId={file.file_id} refetch={refetch} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
