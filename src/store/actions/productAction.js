import axios from "axios"
import { featureProductLink } from "../../API/productPoints"
import { setFeatureProducts } from "../reducers/productSlice"
import { setLoaderFalse } from "../reducers/productSlice"
import toast from "react-hot-toast"
export const fetchFeatureProduct = () => {

    return async (dispatch) => {
        try {
            const { data } = await axios.get(featureProductLink)
            if (data) {

                const newProductArr = Object.keys(data).map((keys) => {
                    return { id: keys, ...data[keys] }
                })
                dispatch(setFeatureProducts(newProductArr))


                // making the loader false after 5 sec
                setTimeout(() => {
                    dispatch(setLoaderFalse())
                }, 5000);


            }

        } catch (error) {
            toast.error('Error Occurred !')
        }

    }
}
