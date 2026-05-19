import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageKey } from '../constants';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(LocalStorageKey.token);

  if (!token) {
    return next(req);
  }

  return next(
    req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
  );
};
