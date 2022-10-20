import jwt, { SignOptions } from 'jsonwebtoken';

import IUserFull from '../interfaces/IUser.interface';

export type UserType = Omit<IUserFull, 'password'>;

class Token {
  private static options: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  public static encode(data: UserType) {
    return jwt.sign({ data }, 'senha super secreta mesmo', Token.options);
  }
  public static decode(token: string) {
    return jwt.verify(token, 'senha super secreta mesmo');
  }
}

export default Token;
