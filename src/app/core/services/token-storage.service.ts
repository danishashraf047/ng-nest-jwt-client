import { Injectable } from '@angular/core';

const TOKEN_KEY = "token"

@Injectable()
export class TokenStorageService {
    async getTokenAsync(): Promise<string> {
        return localStorage.getItem(TOKEN_KEY);
    }

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    async saveToken(token: string): Promise<boolean> {
        localStorage.setItem(TOKEN_KEY, token);
        return true;
    }

    clearToken(): void {
        localStorage.clear();
    }
}