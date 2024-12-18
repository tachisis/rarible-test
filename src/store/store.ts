import { configureStore } from '@reduxjs/toolkit';
import { settingsApi } from '../api/settingsApi/settingsApi';
import { collectionsApi } from '../api/collectionsApi/collectionsApi';

export const store = configureStore({
  reducer: {
    [settingsApi.reducerPath]: settingsApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(settingsApi.middleware)
      .concat(collectionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
