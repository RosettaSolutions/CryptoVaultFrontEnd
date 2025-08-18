import type { IconType } from "react-icons";

type Props = {
  title: string;
  description?: string;
  icon: IconType;
  value: string | number;
};

const InformationCard = ({ title, description, icon: Icon, value }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 m-1 flex flex-1 flex-col justify-between">
      <div>
        <div className="text-gray-700 flex items-center justify-between gap-4">
          <h5 className="italic">{title}</h5>
          <Icon className="h-4 w-4" />
        </div>
        {description && (
          <span className="text-gray-500 text-xs flex">{description}</span>
        )}
      </div>
      <p className="font-bold text-3xl text-sky-400 mt-2 px-1">{value}</p>
    </div>
  );
};

export default InformationCard;
