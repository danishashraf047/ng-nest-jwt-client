import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenStorageService: TokenStorageService) { }

    intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.tokenStorageService.getTokenAsync()).pipe(
            switchMap(token => {
                let authReq = httpRequest;
                if (token != null) {
                    authReq = httpRequest.clone({ headers: httpRequest.headers.set(TOKEN_HEADER_KEY, token) });
                }
                return httpHandler.handle(authReq);
            }));
    }
}

export const authInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];