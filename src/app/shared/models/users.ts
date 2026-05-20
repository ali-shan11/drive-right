export interface GetUsersBody {
  filter: string;
  permissions: string[];
  role: number;
  onlyLockedUsers: boolean;
  sorting: string;
  maxResultCount: number;
  skipCount: number;
}

export interface CreateOrUpdateUserBody {
  user: {
    id?: number;
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string;
    password: string;
    isActive: boolean;
    usidn: string;
    registrationType: 1;
    countryName: string;
    deviceType: 1;
    registrationMode: 1;
    deviceIMEI: string;
    captchaResponse: string;
    firstName: string;
    lastName: string;
    shouldChangePasswordOnNextLogin: boolean;
    isTwoFactorEnabled: boolean;
    isLockoutEnabled: boolean;
  };
  assignedRoleNames: string[];
  sendActivationEmail: boolean;
  setRandomPassword: boolean;
  organizationUnits: number[];
}

export interface FindRolesBody {
  organizationUnitId?: number;
  maxResultCount: number;
  skipCount: number;
  filter: string;
}
