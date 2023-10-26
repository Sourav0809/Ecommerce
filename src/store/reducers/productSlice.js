import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'ProductSlice',
    initialState: { featureProducts: [] },
    reducers: {
        setFeatureProducts(state, action) {
            state.featureProducts = action.payload
        }
    }

})


export default productSlice.reducer

export const { setFeatureProducts } = productSlice.actions