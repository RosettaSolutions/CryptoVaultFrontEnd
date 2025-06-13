type Props = {
  title: string;
  description: string;
  counter: number;
};

const CardTitleInfo = ({ title, description, counter }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl  mb-3 text-slate-700 font-light">
        {title} 
        <span>( {counter} )</span>
      </h1>
      <p className="text-sm/6 text-gray-500 mb-6 h-fit underline-offset-1">{description}</p>
    </div>
  );
};

export default CardTitleInfo;
