export interface UserRole {
  roleId: number;
  roleName: string;
}

export interface UserItem {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  phoneNumber: string;
  profilePictureId: string;
  isEmailConfirmed: boolean;
  roles: UserRole[];
  isActive: boolean;
  creationTime: string;
  id: number;
}

export interface GetUsersResult {
  totalCount: number;
  items: UserItem[];
}

export interface RoleListItem {
  name: string;
  value: string;
}

export interface FindRolesResult {
  totalCount: number;
  items: RoleListItem[];
}
