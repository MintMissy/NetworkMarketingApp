export interface ExistingAccountData {
  name: string;
  password: string;
}

export interface NewAccountData extends ExistingAccountData {
  repeatPassword: string;
}
