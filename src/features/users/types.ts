export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: string;
}

export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}