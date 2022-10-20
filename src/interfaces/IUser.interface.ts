export interface IUser {
  email: string,
  password: string
}

interface IUserFull extends IUser {
  id: number,
  displayName: string,
  image?: string,
}

export default IUserFull;
