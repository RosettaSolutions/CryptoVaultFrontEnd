export interface EncryptedFileResponse {
  id: number;
  file_name: string;
  file_extension: string;
  hash: string;
  decryption_key_base64: string;
  ciphertext_base64: string;
  nonce_base64: string;
  created_at: string
}