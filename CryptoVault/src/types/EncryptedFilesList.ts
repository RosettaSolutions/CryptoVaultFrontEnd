export interface EncryptedFilesList {
  total: number;
  files: {
    file_id: number;
    refered_file: string;
    nonce_base64: string; // Not being used.
    file_hash: string; // Not being used.
    created_at: string;
    in_blockchain: boolean;
  }[];
}
