namespace LoginState {
    export interface Main {
        username: string;
        password: string;
    }
}

export interface LoginState extends LoginState.Main { }