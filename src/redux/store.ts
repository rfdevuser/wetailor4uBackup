import { configureStore } from '@reduxjs/toolkit';
import fabricReducer from './reducers/fabricSlice';

const store = configureStore({
  reducer: {
    fabrics: fabricReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
