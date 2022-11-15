import { configureStore } from "@reduxjs/toolkit";

import { formReducer } from './reducers/formSlice';


export const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export type StoreType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;