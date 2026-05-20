export interface ApiResponse<T> {
  result: T;
  targetUrl: string | null;
  success: boolean;
  error: ApiError | null;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

export interface ApiError {
  code: number;
  message: string;
  details: string | null;
  validationErrors: ValidationError[] | null;
}

export interface ValidationError {
  message: string;
  members: string[];
}
