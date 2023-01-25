import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
    "products/load",
    async() => {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        return json;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        loaded: false,
        isloading: false,
        hasError : false,
        data: []
    },
    extraReducers : builder => {
        builder.addCase(loadProducts.pending, (state, action) => {
            state.loaded = false;
            state.isloading = true;
            state.hasError = false;
            state.data = [];
        })
        .addCase(loadProducts.fulfilled, (state, action) => {
            state.loaded = true;
            state.isloading = false;
            state.hasError = false;
            state.data = action.payload;
        })
        .addCase(loadProducts.rejected, (state, action) => {
            state.loaded = false;
            state.isloading = false;
            state.hasError = true;
            state.data = [];
        })
    }
})

export default productSlice.reducer;