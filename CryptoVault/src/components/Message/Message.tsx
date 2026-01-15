import { BiSolidErrorAlt } from "react-icons/bi";
import { FaCircleInfo } from "react-icons/fa6";
import { PiSealWarningFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { useMessage } from "../../contexts/MessageContext";

// In the parent component, example usage to define a new message.
// const {newMessage} = useMessage()

// useEffect(() => {
//   console.log("Teste de Message ativo.")
//   newMessage({
//       messageType: "error",
//       message: "Erro no login.",
//       description: "Tente utilizar letras maiúsculas e minúsculas."
//     }
//   )
// }, [])

const typeStyles = {
  success: "text-green-500 border-green-300",
  error: "text-red-500 border-red-300",
  info: "text-blue-500 border-blue-300",
  warning: "text-yellow-500 border-yellow-300",
};

const icons = {
  success: <FaCircleCheck className="w-4 h-4" />,
  error: <BiSolidErrorAlt className="w-5 h-5" />,
  info: <FaCircleInfo className="w-4 h-4" />,
  warning: <PiSealWarningFill className="w-5 h-5" />,
};

const Message = () => {
  const { message, excludeMessage } = useMessage();

  if (!message) return null;

  return (
    <div
      className={`fixed top-22 left-1/2 transform -translate-x-1/2 z-50 w-fit h-fit px-3 py-2 bg-gray-50 rounded-md gap-2 shadow-md text-sm ${
        typeStyles[message.messageType]
      }`}
    >
      <div className="flex justify-between align-middle items-center gap-1.5 w-full">
        <div className="flex gap-1 items-center ">
          {icons[message.messageType]}
          <p>{message.message}</p>
        </div>
        <button onClick={excludeMessage}>
          <IoCloseOutline className="w-4 h-4 text-gray-500 cursor-pointer" />
        </button>
      </div>
      {message.description && (
        <div className="flex justify-cente mt-1">
          <span className="text-xs font-extralight text-gray-500">
            {message.description}
          </span>
        </div>
      )}
    </div>
  );
};

export default Message;
