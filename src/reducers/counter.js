import { createSlice } from '@reduxjs/toolkit';

export const counter = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increase: state => {
            state.value++;
        },
        decrease: state => {
            state.value--;
        }
    }
});

export const { increase, decrease } = counter.actions;

export default counter.reducer;