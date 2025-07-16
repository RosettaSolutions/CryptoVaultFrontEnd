import { useRef, useState } from "react";
import { Button } from "@headlessui/react";
import { PiBroomFill } from "react-icons/pi";
import { useMessage } from "../../contexts/MessageContext";
import { useDecryptFile } from "../../hooks/useDecryptFile";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

const FormDecryptFile = () => {
  const { newMessage } = useMessage();
  const [fileId, setFileId] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [decryptionKey, setDecryptionKey] = useState("");

  const { decrypt, loading } = useDecryptFile();

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

  const handleDecryptionKeyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const key = String(e.target.value);
    setDecryptionKey(key.trim());
  };

  const handleClean = () => {
    setSelectedFile(null);
    setFileId(0);
    setDecryptionKey("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || fileId === 0 || !decryptionKey) {
      newMessage({
        messageType: "warning",
        message:
          "You need to select one file, an valid file ID and an decryption key.",
      });

      return;
    }

    await decrypt(fileId, selectedFile, decryptionKey);
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
          File Decryption
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <InputWithLabel
              label="Registered file ID"
              description="Enter here the ID of the original file registered."
              type="number"
              value={fileId}
              onChange={handleFileIdChange}
            />
          </div>
          <div className="px-4 mt-3">
            <label className="block text-sm/6 font-medium text-zinc-900">
              Encrypted file
            </label>
            <p className="text-sm/6 text-gray-500">
              Insert the encrypted file that you want to decrypt here
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
              label="Decryption Key"
              description="Enter here the unique decryption key."
              type="text"
              value={decryptionKey}
              onChange={handleDecryptionKeyChange}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="submit-btn">
              Decrypt file
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormDecryptFile;
