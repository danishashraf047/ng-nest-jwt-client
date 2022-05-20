import { BaseDto } from './base.dto';

namespace GetUsers {
    interface User {
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        address: string,
        zipCode: string,
        countryCode: string
    }

    export interface Main {
        users: User[]
    }
}

export interface GetUsers extends GetUsers.Main { }
export interface GetUsersDto extends BaseDto<GetUsers> { }

namespace CreateUser {
    export interface Main {

    }
}

export interface CreateUser extends CreateUser.Main { }
export interface CreateUserDto extends BaseDto<boolean> { }