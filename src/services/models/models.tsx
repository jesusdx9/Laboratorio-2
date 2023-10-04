export interface RequestOptions {
    endpoint: string,
    method: string,
    options?: object,
    body?: any
    isFile?: boolean
}
export interface Post { 
    userId: 1,
    id: 2,
    title: string,
    body: string
}