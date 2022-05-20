namespace ListState {

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

export interface ListState extends ListState.Main { }