export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  name: string;
}
export interface UserPackage{
  user:User;
  lastLoginTime:Date;
}
