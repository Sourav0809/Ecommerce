import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import productSlice from "../reducers/productSlice";
const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productSlice
    }
})


export default store