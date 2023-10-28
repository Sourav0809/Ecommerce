import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'ProductSlice',
    initialState: { featureProducts: [], loader: true },
    reducers: {
        setFeatureProducts(state, action) {
            state.featureProducts = action.payload
        },
        setLoaderFalse(state) {
            state.loader = false
        }
    }

})


export default productSlice.reducer

export const { setFeatureProducts, setLoaderFalse } = productSlice.actions