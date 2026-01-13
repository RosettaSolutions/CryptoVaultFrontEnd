import { useRef, useState } from "react";
import { PiBroomFill } from "react-icons/pi";
import { useMessage } from "../../contexts/MessageContext";
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

interface Props {
  validate: (file: File, fileId: number) => void;
  setStateValidation?: React.Dispatch<
    React.SetStateAction<"waiting" | "true" | "false">
  >;
}

const FormValidateFile = ({ validate, setStateValidation }: Props) => {
  const { newMessage } = useMessage();
  const { filesList } = useGetFilesList();
  const [fileId, setFileId] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClean = () => {
    setSelectedFile(null);
    setFileId("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (setStateValidation) {
      setStateValidation("waiting");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !fileId) {
      newMessage({
        messageType: "warning",
        message: "You need to select one file and a valid file ID.",
      });

      return;
    }

    await validate(selectedFile, Number(fileId));
  };

  return (
    <Card className="min-w-[25%] mx-6 shadow-xl bg-gray-50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl text-slate-700 font-light">
          File Validation
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={handleClean}>
          <PiBroomFill className="text-slate-700 w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 px-4">
            <Label
              htmlFor="file"
              className="block text-sm font-medium text-zinc-900"
            >
              File
            </Label>
            <p className="text-sm text-gray-500">
              Insert the file that you want to validate here
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
            <Label className="block text-sm font-medium text-zinc-900">
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
                {filesList?.files
                  ?.filter((file) => file.in_blockchain)
                  .map((file: EncryptedFilesList["files"][0]) => (
                    <SelectItem key={file.file_id} value={String(file.file_id)}>
                      {file.file_id} - {file.refered_file}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center pt-2">
            <Button type="submit" className="mt-0">
              Validate file
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormValidateFile;
