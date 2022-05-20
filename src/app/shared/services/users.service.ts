import { API_BASE_URL, httpOptions } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserBody } from '../bodies/users.bodies';
import { GetUsersDto, CreateUserDto } from '../dtos/users.dtos';

const CONTROLLER = 'users';

@Injectable()
export class UsersService {
    constructor(
        private _httpClient: HttpClient
    ) {

    }

    createUser(body: CreateUserBody) {
        return this._httpClient.post<CreateUserDto>(`${API_BASE_URL}${CONTROLLER}/create-user`, body, httpOptions);
    }

    getUsers() {
        return this._httpClient.get<GetUsersDto>(`${API_BASE_URL}${CONTROLLER}/get-users`, httpOptions);
    }
}