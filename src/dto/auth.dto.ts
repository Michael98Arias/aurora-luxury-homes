export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}
