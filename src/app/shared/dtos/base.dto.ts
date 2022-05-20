export interface BaseDto<T> {
    status: boolean,
    message: string,
    data: T
}