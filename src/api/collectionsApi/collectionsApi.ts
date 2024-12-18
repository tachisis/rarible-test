import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCollections } from './collectionsApi.types';

export const collectionsApi = createApi({
  reducerPath: 'collectionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getCollections: builder.query<TCollections, { type: string }>({
      query: ({ type }) => `mocks/${type}.json`,
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionsApi;
