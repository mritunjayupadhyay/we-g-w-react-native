import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { userReducer } from './user.slice';


export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>