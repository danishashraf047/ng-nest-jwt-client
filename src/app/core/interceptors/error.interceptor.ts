import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private _tokenStorageService: TokenStorageService,
        private _router: Router
    ) { }
    intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
        return httpHandler.handle(httpRequest)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    if (error.error instanceof ErrorEvent) {
                        return throwError(error.error.message);
                    } else {
                        if (error.status == 401) {
                            this._tokenStorageService.clearToken();
                            this._router.navigateByUrl('/');
                            return throwError(null);
                        }
                        else {
                            return throwError(error.error.message);
                        }
                    }
                })
            )
    }
}

export const httpErrorInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];