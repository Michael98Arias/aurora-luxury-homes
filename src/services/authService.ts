import { httpClientUsers } from './httpServices';
import { AUTH_API } from './apiEndpoints';
import { LoginPayload, LoginResponse } from '@/dto/auth.dto';
import axios from 'axios';

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { username, password } = payload;

  if (!username || !password) {
    throw new Error('Username and password are required');
  }

  try {
    const response = await httpClientUsers.get<LoginResponse[]>(AUTH_API.LOGIN, {
      params: { userName: username, password },
    });

    const dataArray = response.data;

    if (!dataArray || dataArray.length === 0) {
      throw new Error('Usuario no encontrado');
    }

    return dataArray[0];
  } catch (error: unknown) {
    console.error('Error login', error);

    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }

    throw (error as Error).message;
  }
};
