import { GrClose } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { useMessage } from "../../contexts/MessageContext";
import ApiKeysTableDropdownButton from "../ApiKeysTableActionsButton/ApiKeysTableActionsButton";
import BlockchainTableDropdownButton from "../BlockchainTableDropdownButton/BlockchainTableDropdownButton";

const data = {
  "Owner user": "Tester",
  number_of_keys: 1,
  keys: [
    {
      key_id: 1,
      key: "888a6a06-4455-4139-8ec8-0856810ed961",
      description:
        "Pellentesque nec turpis ante. Donec maximus leo vulputate arcu rutrum malesuada. Nulla venenatis urna at metus iaculis, gravida blandit sapien tempor. Nullam id vulputate nisi, a maximus magna. Curabitur hendrerit lectus lorem, eget sodales erat aliquet nec. Praesent tempus fringilla congue. Fusce dictum nisl nunc, at luctus elit suscipit eu. Proin neque urna, volutpat quis facilisis quis, hendrerit vitae tellus.",
      created_at: "2025-07-04T22:54:29.540023Z",
      is_active: true,
    },
    {
      key_id: 2,
      key: "888a6a06-4455-4139-8ec8-0856810ed962",
      description: "De uso para o VitalGuard.",
      created_at: "2025-07-04T22:54:29.540023Z",
      is_active: false,
    },
    {
      key_id: 3,
      key: "888a6a06-4455-4139-8ec8-0856810ed963",
      description: "",
      created_at: "2025-07-04T22:54:29.540023Z",
      is_active: true,
    },
  ],
};

const ApiKeysDetailsTable = () => {
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
        {data.keys.map((keys) => (
          <tr className="text-center align-middle" key={keys.key_id}>
            <td className="py-3">{keys.key_id}</td>
            <td
              className="py-3 hover:cursor-copy"
              onClick={() => {
                handleCopyValue(keys.key, "API Key");
              }}
            >
              {keys.key}
            </td>
            <td className="py-3">
              {new Date(keys.created_at).toLocaleString("en-US")}
            </td>
            <td className="py-3">
              <div className="flex justify-center">
                {keys.is_active ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <GrClose className="text-red-500" />
                )}
              </div>
            </td>
            <td className="py-3 flex justify-center">
              <ApiKeysTableDropdownButton fileId={keys.key_id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApiKeysDetailsTable;
