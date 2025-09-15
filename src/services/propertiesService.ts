import { httpClientProperties } from './httpServices';
import axios from 'axios';
import { GetPropertiesPayload, PropertiesListResponse } from '@/dto/properties.dto';

export const getProperties = async (
  payload?: GetPropertiesPayload
): Promise<{ data: PropertiesListResponse; total: number }> => {
  try {
    const response = await httpClientProperties.get<PropertiesListResponse>(
      '',
      { params: payload }
    );

    if (!response.data || response.data.length === 0) {
      throw new Error('No se encontraron propiedades');
    }
    const total = Number(response.headers['x-total-count']) || response.data.length;

    return { data: response.data, total };
  } catch (error: unknown) {
    console.error('Error al obtener propiedades', error);

    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }

    throw (error as Error).message;
  }
};
