namespace SignIn {
    export interface Main {
        username: string,
        password: string,
    }
}

export interface SignInBody extends SignIn.Main { }