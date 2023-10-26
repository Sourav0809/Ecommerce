import axios from "axios"
import { featureProductLink } from "../../API/productPoints"
import { setFeatureProducts } from "../reducers/productSlice"

export const fetchFeatureProduct = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(featureProductLink)
            if (data) {

                const newProductArr = Object.keys(data).map((keys) => {
                    return { id: keys, ...data[keys] }
                })
                dispatch(setFeatureProducts(newProductArr))

            }

        } catch (error) {
            console.log(error)
        }
    }
}
