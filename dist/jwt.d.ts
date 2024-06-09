export interface TokenInfo<T> {
    iat: number;
    exp: number;
    payload: T;
}
export declare class Jwt {
    createAccessToken<T extends object>(info: T): Promise<string>;
    createRefreshToken<T extends object>(info: T): Promise<string>;
    verifyToken<Payload>(token: string, mode: ('accessToken' | 'refreshToken')): Promise<TokenInfo<Payload>>;
    isExpired(exp: number): boolean;
}
