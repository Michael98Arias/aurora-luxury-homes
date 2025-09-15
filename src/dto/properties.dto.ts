export interface GetPropertiesPayload {
  _page?: number;
  _limit?: number;
}

export interface PropertyResponse {
  id: number;
  Name: string;
  Image: string;
  Locations: string;
  PriceProperty: string;
}

export type PropertiesListResponse = PropertyResponse[];

export interface PropertiesAPIResponse {
  data: PropertiesListResponse;
  total?: number;
}
