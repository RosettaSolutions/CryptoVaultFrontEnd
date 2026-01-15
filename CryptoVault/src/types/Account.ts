export interface Account {
  username: string
  email: string
  available_balance: number
  recovery_email: string
  is_email_verified: boolean
  protected_files_count: number
  created_at: string
}
