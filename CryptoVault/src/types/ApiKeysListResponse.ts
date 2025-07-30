export interface ApiKeysListResponse {
  "Owner user": string;
  number_of_keys: number;
  keys: {
    key_id: number;
    key: string;
    description: string;
    created_at: Date;
    is_active: boolean;
  }[];
}
