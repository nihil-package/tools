import { sign, verify } from 'jsonwebtoken';

export interface TokenInfo<T> {
  iat: number;
  exp: number;
  payload: T;
}

export interface TokenPayload<T> {
  payload: T;
  secret: string;
}

export class Jwt {
  public async createAccessToken<T extends object>(tokenInfo: TokenPayload<T>) {
    return sign(
      tokenInfo.payload,
      tokenInfo.secret,
      {
        algorithm: 'HS256',
        expiresIn: '1h',
      }
    );
  }

  public async createRefreshToken<T extends object>(tokenInfo: TokenPayload<T>) {
    return sign(
      tokenInfo.payload,
      tokenInfo.secret,
      {
        algorithm: 'HS256',
        expiresIn: '90days',
      }
    );
  }

  public async verifyToken<Payload>(
    token: string,
    mode: ('accessToken' | 'refreshToken'),
    secret: string
  ): Promise<TokenInfo<Payload>> {
    return verify(token, secret, {
      algorithms: [ 'HS256', ],
    }) as unknown as TokenInfo<Payload>;
  }

  public isExpired(exp: number) {
    const now = Math.floor(Date.now() / 1000);

    const diff = Math.floor(exp) - now;

    console.log('diff >> ', diff);

    return diff < 0;
  }
}
