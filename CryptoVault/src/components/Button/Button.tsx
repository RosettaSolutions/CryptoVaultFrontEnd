type Props = {
  buttonType?: "submit" | "reset" | "button";
  buttonText: string;
};

const Button = ({ buttonType = "submit", buttonText }: Props) => {
  return (
    <button
      className="bg-gray-50 border-2 border-sky-400 backdrop-blur-md text-sky-400 py-2 px-4 hover:scale-105 rounded-md shadow-md cursor-pointer font-mono transition ease-in-out duration-300 hover:bg-sky-400 hover:text-gray-200 disabled:bg-slate-400 disabled:text-gray-50 disabled:cursor-not-allowed disabled:border-slate-400"
      type={buttonType}
    >
      {buttonText}
    </button>
  );
};

export default Button