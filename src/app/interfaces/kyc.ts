export interface KycResult {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  stateOfOrigin: string;
  lga: string;
  residentialAddress: string;
  profilePhotoUrl: string;
  nin: string;
  ninVerified: boolean;
  faceVerificationStatus: number;
  faceVerificationDate: string;
  accountRole: number;
  accountStatus: number;
  kycStatus: number;
  kycRejectionReason: string;
  otpSecret: string;
  lastLoginIP: string;
  preferredLanguage: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  lastModificationTime: string;
  lastModifierUserId: number;
  creationTime: string;
  creatorUserId: number;
  id: number;
}
