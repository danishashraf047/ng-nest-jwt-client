namespace HomeState {
    export interface Main {
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        address: string,
        zipCode: string,
        countryCode: string
    }
}

export interface HomeState extends HomeState.Main { }