import { configureStore } from '@reduxjs/toolkit';
import offersReducer from '../redux/reducers/offersSlice';

export const store = configureStore({
    reducer: {
        offers: offersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
