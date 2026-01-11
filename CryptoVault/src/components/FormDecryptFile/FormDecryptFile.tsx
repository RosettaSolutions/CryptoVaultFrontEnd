import { useRef, useState } from "react";
import { PiBroomFill } from "react-icons/pi";
import { useMessage } from "../../contexts/MessageContext";
import { useDecryptFile } from "../../hooks/useDecryptFile";
import { useGetFilesList } from "../../hooks/useGetFilesList";
import type { EncryptedFilesList } from "../../types/EncryptedFilesList";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormDecryptFile = () => {
  const { newMessage } = useMessage();
  const { filesList } = useGetFilesList();
  const [fileId, setFileId] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [decryptionKey, setDecryptionKey] = useState("");

  const { decrypt } = useDecryptFile();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
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
    setFileId("");
    setDecryptionKey("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !fileId || !decryptionKey) {
      newMessage({
        messageType: "warning",
        message:
          "You need to select one file, a valid file ID and a decryption key.",
      });

      return;
    }

    await decrypt(Number(fileId), selectedFile, decryptionKey);
  };

  return (
    <Card className="min-w-[25%] mx-5 shadow-xl bg-gray-50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl text-slate-700 font-light">
          File Decryption
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={handleClean}>
          <PiBroomFill className="text-slate-700 w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 px-4">
            <Label
              htmlFor="fileId"
              className="block text-sm font-medium text-zinc-900"
            >
              Registered file ID
            </Label>
            <p className="text-sm text-gray-500">
              Select the ID of the original file registered.
            </p>
            <Select value={fileId} onValueChange={setFileId}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a file ID" />
              </SelectTrigger>
              <SelectContent>
                {filesList?.files.map((file: EncryptedFilesList["files"][0]) => (
                    <SelectItem key={file.file_id} value={String(file.file_id)}>
                      {file.file_id} - {file.refered_file}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 px-4">
            <Label
              htmlFor="file"
              className="block text-sm font-medium text-zinc-900"
            >
              Encrypted file
            </Label>
            <p className="text-sm text-gray-500">
              Insert the encrypted file that you want to decrypt here
            </p>
            <Input
              id="file"
              ref={fileInputRef}
              type="file"
              className="mt-1 cursor-pointer file:cursor-pointer"
              onChange={handleFileChange}
            />
          </div>

          <div className="space-y-2 px-4">
            <Label
              htmlFor="decryptionKey"
              className="block text-sm font-medium text-zinc-900"
            >
              Decryption Key
            </Label>
            <p className="text-sm text-gray-500">
              Enter here the unique decryption key.
            </p>
            <Input
              id="decryptionKey"
              type="text"
              value={decryptionKey}
              onChange={handleDecryptionKeyChange}
            />
          </div>

          <div className="flex justify-center pt-2">
            <Button type="submit" className="mt-0">
              Decrypt file
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormDecryptFile;
