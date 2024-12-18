import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TSettings } from './settingsApi.types';

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getSettings: builder.query<TSettings, void>({
      query: () => 'mocks/settings.json',
    }),
  }),
});

export const { useGetSettingsQuery } = settingsApi;
