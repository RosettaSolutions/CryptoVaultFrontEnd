export interface FilesOnTheBlockchain {
  files: {
    file_id: number;
    file_name: string;
    file_extension: string;
    blockchain_transaction: {
      tx_hash: string;
      stored_hash: string;
      contract_address: string;
      status: string;
      created_at: string;
    };
  }[];
}
