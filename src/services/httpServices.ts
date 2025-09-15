import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL_USERS = process.env.NEXT_PUBLIC_API_BASE_URL_USERS;
const API_URL_PROPERTIES = process.env.NEXT_PUBLIC_API_BASE_URL_PROPERTIES;

export const httpClientUsers: AxiosInstance = axios.create({
  baseURL: API_URL_USERS,
  headers: { 'Content-Type': 'application/json' },
});

export const httpClientProperties: AxiosInstance = axios.create({
  baseURL: API_URL_PROPERTIES,
  headers: { 'Content-Type': 'application/json' },
});

export const getUsers = <T = unknown>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientUsers.get<T>(url, config);

export const postUsers = <T = unknown>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientUsers.post<T>(url, data, config);

export const putUsers = <T = unknown>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientUsers.put<T>(url, data, config);

export const patchUsers = <T = unknown>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientUsers.patch<T>(url, data, config);

export const deleteUsers = <T = unknown>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientUsers.delete<T>(url, config);

export const getProperties = <T = unknown>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientProperties.get<T>(url, config);

export const postProperties = <T = unknown>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientProperties.post<T>(url, data, config);

export const putProperties = <T = unknown>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientProperties.put<T>(url, data, config);

export const patchProperties = <T = unknown>(
  url: string,
  data: object,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientProperties.patch<T>(url, data, config);

export const deleteProperties = <T = unknown>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => httpClientProperties.delete<T>(url, config);

export const httpClients = {
  httpClientUsers,
  httpClientProperties,
};
