// import { useState } from "react"
// import InputWithLabel from "../InputWithLabel/InputWithLabel";
import { Button } from "@headlessui/react";
// import { useState } from "react";
// import { GrClose } from "react-icons/gr";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEncryptFile } from "../../hooks/useEncryptFile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../../contexts/MessageContext";
import { COMPLETE_PATHS } from "@/routes/paths";

type Props = {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
};

const FormAddFile = ({ showForm, setShowForm }: Props) => {
  const { encrypt, responseData } = useEncryptFile();
  const { newMessage } = useMessage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (responseData) {
      const blob = new Blob([responseData.decryption_key_base64], {
        type: "text/plain;charset=utf-8",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${responseData.file_name}_unique_decryption_key.txt`;
      link.click();

      URL.revokeObjectURL(link.href);

      navigate(COMPLETE_PATHS.FILES);
      newMessage({
        messageType: "success",
        message: "File encrypted successfully.",
        description: `Attention:\n\nThe file _unique_decryption_key.txt contains the only key that can decrypt your file.\nYou will not be able to access it again later — not even we can.\n\nPlease store it in a secure place, such as a password manager or written in a physical notebook.`,
      });
    }
  }, [responseData, navigate, newMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      newMessage({
        messageType: "warning",
        message: "You need to select one file.",
      });

      return;
    }

    await encrypt(selectedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <>
      {showForm && (
        <div className="min-w-1/4 flex flex-col items-center bg-gray-50 shadow-xl rounded-md px-6 py-6">
          {/* <div className="w-full flex flex-row-reverse">
            <button
              className="cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              <GrClose className="text-red-500 w-3.5 h-3.5" />
            </button>
          </div> */}
          <div className="w-full flex">
            <Link to={COMPLETE_PATHS.FILES}>
              <button
                className="cursor-pointer"
                onClick={() => setShowForm(false)}
              >
                <IoReturnDownBack className="text-slate-700 w-4 h-4" />
              </button>
            </Link>
          </div>
          <h1 className="mb-4 text-2xl text-slate-700 font-light">
            Encrypt file
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm/6 font-medium text-zinc-900">
                File
              </label>
              <p className="text-sm/6 text-gray-500">
                Insert the file you want to encrypt here
              </p>
              <input
                id=""
                type="file"
                className="w-full mt-1 block rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-500 focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 font-extralight data-focus:outline-white/25 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer file:cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="submit-btn">
                Encrypt file
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FormAddFile;
