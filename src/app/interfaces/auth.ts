export interface AuthResult {
  accessToken: string;
  encryptedAccessToken: string;
  expireInSeconds: number;
  userId: number;
}

export interface RegisterResult {
  canLogin: boolean;
  userId?: number;
}

export interface ResetPasswordResult {
  canLogin: boolean;
  userName: string;
}
