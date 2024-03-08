export interface ILoginRes {
  token: string;
  profile: IProfile;
}

export interface ILogin {
  token: string;
}

export type UserRoleTypeAttribute = "client" | "admin";
export interface Wallet {
  totalAmount?: number;
  totalUsedTokens?: number;
}

export interface IProfile {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  organizationId: number;
  phoneNumber: null;
  role: UserRoleTypeAttribute;
  updatedAt: string;
  wallet?: Wallet;
}
