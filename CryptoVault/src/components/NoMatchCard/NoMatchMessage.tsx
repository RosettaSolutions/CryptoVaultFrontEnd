import { BsQuestionCircle } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
};

const NoMatchMessage = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <BsQuestionCircle className="w-24 h-24 text-gray-800" />
      <h2 className="text-lg pt-5 text-slate-700">{title}</h2>
      <p className="text-sm/6 text-gray-500">{description}</p>
    </div>
  );
};

export default NoMatchMessage;
