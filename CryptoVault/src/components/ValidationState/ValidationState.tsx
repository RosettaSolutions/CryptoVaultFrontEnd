import { BarLoader } from "react-spinners";
import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidErrorAlt } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";

interface Props {
  loading: boolean;
  state: "waiting" | "true" | "false";
}

const typeStyles = {
  waiting: "text-gray-700",
  true: "text-green-500",
  false: "text-red-500",
};

const ValidationState = ({ loading, state }: Props) => {
  return (
    <div
      className={`flex items-center justify-center mt-4 min-w-1/5 h-12 w-fit px-4 rounded-md shadow-xl text-sm bg-gray-50 ${typeStyles[state]}`}
    >
      {loading ? (
        <BarLoader color="#364153" height={3} />
      ) : state === "waiting" ? (
        <>
          <FaClock />
          <span className="ps-1">The result will be shown here.</span>
        </>
      ) : state === "true" ? (
        <>
          <FaCircleCheck className="w-4 h-4" />
          <span className="ps-1">
            Your file corresponds to the authentic file.
          </span>
        </>
      ) : (
        <>
          <BiSolidErrorAlt className="w-5 h-5" />
          <span className="ps-1">
            Your file does not match the authentic file.
          </span>
        </>
      )}
    </div>
  );
};

export default ValidationState;
