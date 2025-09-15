export const AUTH_API = {
  LOGIN: '/',
  LOGOUT: '/logout',
  GET_USER_DATA: '/user',
};

export const PROPERTY_API = {
  CREATE_PROPERTY: '/property/create',
  GET_PROPERTIES: '/properties',
  GET_PROPERTY_BY_ID: (id: string) => `/property/${id}`,
};
