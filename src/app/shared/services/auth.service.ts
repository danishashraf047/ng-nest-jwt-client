import { API_BASE_URL, httpOptions } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInBody } from '../bodies/auth.bodies';
import { SignInDto } from '../dtos/auth.dtos';

const CONTROLLER = 'auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _httpClient: HttpClient
    ) {

    }

    signIn(body: SignInBody) {
        return this._httpClient.post<SignInDto>(`${API_BASE_URL}${CONTROLLER}/sign-in`, body, httpOptions);
    }
}