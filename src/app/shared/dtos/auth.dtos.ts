import { BaseDto } from './base.dto';

namespace SignIn {
    export interface Main {
        accessToken: string
    }
}

export interface SignIn extends SignIn.Main { }
export interface SignInDto extends BaseDto<SignIn> { }