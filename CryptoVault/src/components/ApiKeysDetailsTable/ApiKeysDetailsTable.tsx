import { GrClose } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { useMessage } from "../../contexts/MessageContext";
import type { ApiKeysListResponse } from "../../types/ApiKeysListResponse";
import ApiKeysTableDropdownButton from "../ApiKeysTableActionsButton/ApiKeysTableActionsButton";

type Props = {
  ApiKeysList: ApiKeysListResponse;
  refetch: () => void;
};

const ApiKeysDetailsTable = ({ ApiKeysList, refetch }: Props) => {
  const { newMessage } = useMessage();

  const handleCopyValue = (value: string, columnValue: string) => {
    navigator.clipboard.writeText(value);
    newMessage({
      messageType: "info",
      message: `${columnValue} copied to clipboard.`,
    });
  };

  return (
    <table className="table-auto bg-gray-50 shadow-xl rounded-md mt-7 w-4/5">
      <thead className="text-gray-700 font-mono font-semibold text-sm border-b border-gray-200">
        <tr className="">
          <th className="px-4 py-3">ID</th>
          <th className="px-4 py-3">Key</th>
          <th className="px-4 py-3">Created at</th>
          <th className="px-4 py-3">Is active ?</th>
          <th className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 font-sans font-extralight text-sm">
        {ApiKeysList.keys.map((key) => (
          <tr className="text-center align-middle" key={key.key_id}>
            <td className="py-3">{key.key_id}</td>
            <td
              className="py-3 hover:cursor-copy"
              onClick={() => {
                handleCopyValue(key.key, "API Key");
              }}
            >
              {key.key}
            </td>
            <td className="py-3">
              {new Date(key.created_at).toLocaleString("en-US")}
            </td>
            <td className="py-3">
              <div className="flex justify-center">
                {key.is_active ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <GrClose className="text-red-500" />
                )}
              </div>
            </td>
            <td className="py-3 flex justify-center">
              <ApiKeysTableDropdownButton
                keyId={key.key_id}
                refetch={refetch}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApiKeysDetailsTable;
