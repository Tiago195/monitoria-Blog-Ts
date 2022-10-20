import UserModel from '../database/models/User';
import IUserFull, { IUser } from '../interfaces/IUser.interface';
import ErrorGenerate from '../utils/ErrorGenerate';
import Token from '../utils/Token';

export default class User {
  private getToken(user: UserModel) {
    const userToken = {
      id: user.getDataValue('id'),
      displayName: user.getDataValue('displayName'),
      email: user.getDataValue('email'),
      image: user.getDataValue('image'),
    };

    return Token.encode(userToken);
  }
  public async login(user: IUser) {
    const userExist = await UserModel.findOne({ where: { email: user.email } });

    if (!userExist) throw new ErrorGenerate('Invalid fields', 400);
    if (userExist.getDataValue('password') !== user.password) throw new ErrorGenerate('Invalid fields', 400);

    return this.getToken(userExist);
  }
  public async create(user: Omit<IUserFull, 'id'>) {
    const userExist = await UserModel.findOne({ where: { email: user.email } });

    if (userExist) throw new ErrorGenerate('User already registered', 409);

    const newUser = await UserModel.create(user);

    return this.getToken(newUser);
  }
  public async getAll() {
    return UserModel.findAll({ attributes: { exclude: ['password'] } });
  }
  public async getById(id: string) {
    const user = await UserModel.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!user) throw new ErrorGenerate('User does not exist', 404);

    return user;
  }
}
