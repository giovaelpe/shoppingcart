import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload);
        },
        addQuant(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            state[index] = { ...state[index], quant: state[index].quant + 1 }
        },
        removeQuant(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            state[index] = { ...state[index], quant: state[index].quant - 1 }
        },
        removeItem(state, action){
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addItem, addQuant, removeQuant, removeItem } = cartSlice.actions;
export default cartSlice.reducer;