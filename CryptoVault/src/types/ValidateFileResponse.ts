export type ValidateFileResponse = {
  id: number;
  original_file_name: string;
  original_file_extension: string;
  original_file_hash: string;
  blockchain_stored_hash: string;
  actual_file_name: string;
  actual_file_hash: string;
  is_authentic: boolean;
};