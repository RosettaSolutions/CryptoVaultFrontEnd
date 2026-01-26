import type { FilesOnTheBlockchain } from "../../types/FilesOnTheBlockchain";
import { useMessage } from "../../contexts/MessageContext";
import BlockchainTableDropdownButton from "../BlockchainTableDropdownButton/BlockchainTableDropdownButton";

type Props = {
  filesOnTheBlockchain: FilesOnTheBlockchain;
  refetch: () => void;
};

// remove refetch prop
const BlockchainDetailsTable = ({ filesOnTheBlockchain }: Props) => {
  const { newMessage } = useMessage();

  const handleCopyValue = (value: string, columnValue: string) => {
    navigator.clipboard.writeText(value);
    newMessage({
      messageType: "info",
      message: `${columnValue} copied to clipboard.`,
    });
  };

  return (
    <div className="overflow-x-auto w-11/12">
      <table className="table-auto bg-gray-50 shadow-xl rounded-md mt-7 w-full">
        <thead className="text-gray-700 font-mono font-semibold text-sm border-b border-gray-200 max-h-5">
          <tr className="">
            <th className="px-4 py-3 w-[1%] max-w-[1%]">ID</th>
            <th className="px-4 py-3 text-nowrap">File name</th>
            <th className="px-4 py-3 text-nowrap">File Hash</th>
            <th className="px-4 py-3 text-nowrap">Transaction Hash</th>
            <th className="px-4 py-3 text-nowrap">Contract Address</th>
            <th className="px-4 py-3 w-[157px] max-w-[157px] text-nowrap">
              Implemented at
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 font-sans font-extralight text-xs">
          {filesOnTheBlockchain?.files?.map((file) => (
            <tr className="text-center align-middle" key={file.file_id}>
              <td className="py-3 w-[1%] max-w-[1%]">{file.file_id}</td>
              <td className="py-3 px-3 max-w-[100px] truncate transition-all duration-1000 ease-in-out hover:max-w-[500px] hover:whitespace-nowrap  hover:max-h-[41px]">
                {file.file_name}
                <span className="text-gray-500 font-semibold">
                  {file.file_extension}
                </span>
              </td>
              <td
                className="py-3 px-3 max-w-[100px] truncate transition-all duration-1000 ease-in-out hover:max-w-[500px] hover:whitespace-nowrap  hover:max-h-[41px] hover:cursor-copy"
                onClick={() => {
                  handleCopyValue(
                    file.blockchain_transaction.stored_hash,
                    "File Hash"
                  );
                }}
              >
                {file.blockchain_transaction.stored_hash}
              </td>
              <td
                className="py-3 px-3 max-w-[100px] truncate transition-all duration-1000 ease-in-out hover:max-w-[500px] hover:whitespace-nowrap  hover:max-h-[41px] hover:cursor-copy"
                onClick={() => {
                  handleCopyValue(
                    file.blockchain_transaction.tx_hash,
                    "Transaction Hash"
                  );
                }}
              >
                {file.blockchain_transaction.tx_hash}
              </td>
              <td
                className="py-3 px-3 max-w-[100px] truncate transition-all duration-1000 ease-in-out hover:max-w-[500px] hover:whitespace-nowrap  hover:max-h-[41px] hover:cursor-copy"
                onClick={() => {
                  handleCopyValue(
                    file.blockchain_transaction.contract_address,
                    "Contract Address"
                  );
                }}
              >
                {file.blockchain_transaction.contract_address}
              </td>
              <td className="py-3 px-3 w-[157px] max-w-[157px]">
                {new Date(
                  file.blockchain_transaction.created_at
                ).toLocaleString("en-US")}
              </td>
              <td className="py-3 flex justify-center">
                <BlockchainTableDropdownButton fileId={file.file_id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockchainDetailsTable;
