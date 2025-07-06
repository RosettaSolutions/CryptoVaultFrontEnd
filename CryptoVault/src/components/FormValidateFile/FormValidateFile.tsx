import { useRef, useState } from "react";
import { Button } from "@headlessui/react";
import { PiBroomFill } from "react-icons/pi";
import { useMessage } from "../../contexts/MessageContext";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

interface Props {
  validate: (file: File, fileId: number) => void;
  setStateValidation?: React.Dispatch<
    React.SetStateAction<"waiting" | "true" | "false">
  >;
}

const FormValidateFile = ({ validate, setStateValidation }: Props) => {
  const { newMessage } = useMessage();
  const [fileId, setFileId] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value > 0) {
      setFileId(value);
    } else {
      setFileId(0);
    }
  };

  const handleClean = () => {
    setSelectedFile(null);
    setFileId(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (setStateValidation) {
      setStateValidation("waiting");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || fileId === 0) {
      newMessage({
        messageType: "warning",
        message: "You need to select one file and an valid file ID.",
      });

      return;
    }

    await validate(selectedFile, fileId);
  };

  return (
    <>
      <div className="min-w-1/4 flex flex-col items-center bg-gray-50 shadow-xl rounded-md px-6 py-6">
        <div className="w-full flex justify-end">
          <button className="cursor-pointer" onClick={handleClean}>
            <PiBroomFill className="text-slate-700 w-4 h-4" />
          </button>
        </div>
        <h1 className="mb-4 text-2xl text-slate-700 font-light">
          File Validation
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="px-4">
            <label className="block text-sm/6 font-medium text-zinc-900">
              File
            </label>
            <p className="text-sm/6 text-gray-500">
              Insert the file that you want to validate here
            </p>
            <input
              id=""
              ref={fileInputRef}
              type="file"
              className="w-full mt-1 block rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-500 focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 font-extralight data-focus:outline-white/25 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer file:cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <InputWithLabel
              label="Registered file ID"
              description="Enter here the ID of the original file registered."
              type="number"
              value={fileId}
              onChange={handleFileIdChange}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="submit-btn">
              Validate file
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormValidateFile;
