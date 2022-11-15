import { RefObject } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
    author: '',
    description: '',
    title: '',
    image: {} as File
}

export type FieldsType = keyof typeof initialState;

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeForm(state, action: PayloadAction<{ name: FieldsType, value: any }>) {
            const { name, value } = action.payload;

            state[name] = value;
        }
    }
});

export const formReducer = formSlice.reducer;
export const { changeForm } = formSlice.actions;