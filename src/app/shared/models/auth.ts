export interface LoginBody {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
}

export interface RegisterBody {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse: string;
}

export interface SendEmailActivationLinkBody {
  email: string;
}

export interface ActivateEmailBody {
  userId: number;
  confirmationCode: string;
  c?: string;
}

export interface ResetPasswordBody {
  userId?: number;
  resetCode: string;
  password: string;
  returnUrl: string;
  singleSignIn?: string;
  c?: string;
}
