import { sign, verify } from 'jsonwebtoken';

export interface TokenInfo<T> {
  iat: number;
  exp: number;
  payload: T;
}

export class Jwt {
  public async createAccessToken<T extends object>(info: T) {
    return sign(
      info,
      process.env.NEXT_PUBLIC_ACCESS_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: '1h',
      }
    );
  }

  public async createRefreshToken<T extends object>(info: T) {
    return sign(
      info,
      process.env.NEXT_PUBLIC_REFRESH_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: '90days',
      }
    );
  }

  public async verifyToken<Payload>(
    token: string,
    mode: ('accessToken' | 'refreshToken')
  ): Promise<TokenInfo<Payload>> {
    const secret = mode === 'accessToken'
      ? process.env.NEXT_PUBLIC_ACCESS_SECRET
      : process.env.NEXT_PUBLIC_REFRESH_SECRET;

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
