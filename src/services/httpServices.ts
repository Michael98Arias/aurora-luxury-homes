import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL_USERS;

const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = <T = unknown>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
  return httpClient.get<T>(url, config);
};

export const post = <T = unknown>(url: string, data: object, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
  return httpClient.post<T>(url, data, config);
};

export const put = <T = unknown>(url: string, data: object, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
  return httpClient.put<T>(url, data, config);
};

export const patch = <T = unknown>(url: string, data: object, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
  return httpClient.patch<T>(url, data, config);
};

export const del = <T = unknown>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> => {
  return httpClient.delete<T>(url, config);
};

export default httpClient;
