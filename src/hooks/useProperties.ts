'use client';

import { useState, useEffect } from 'react';
import { getProperties } from '@/services/propertiesService';
import { GetPropertiesPayload, PropertyResponse } from '@/dto/properties.dto';

export const useProperties = (page: number = 1, limit: number = 10) => {
  const [properties, setProperties] = useState<PropertyResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [total, setTotal] = useState<number>(0);

  const fetchProperties = async (pageNum = page, pageLimit = limit) => {
    setLoading(true);
    setError('');

    try {
      const { data, total } = await getProperties({ _page: pageNum, _limit: pageLimit });
      setProperties(data);
      setTotal(total);
    } catch (err) {
      setError((err as string) || 'Error al obtener propiedades');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [page, limit]);

  return {
    properties,
    loading,
    error,
    total,
    refresh: fetchProperties,
  };
};
