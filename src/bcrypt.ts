import { compare, hash } from 'bcryptjs';

export class Bcrypt {
  static dataToHash(data: string) {
    return hash(data, 10);
  }

  static dataCompare(hashedData: string, data: string) {
    return compare(data, hashedData);
  }
}
