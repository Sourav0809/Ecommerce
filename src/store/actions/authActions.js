import axios from "axios";
import { setIdToken, userAuthenticated } from "../reducers/authSlice";
import { verifyUserLink } from "../../API/VerifyPoints";
import { loginLink, signUpLink } from "../../API/authPoints";
import toast from "react-hot-toast";
export const setUserAuthenticated = (idToken) => {
    return (dispatch) => {
        dispatch(userAuthenticated())
        dispatch(setIdToken(idToken))
    }
}


// USER SIGN UP ACTION
export const userSignUp = (submitedVal) => {

    return async (dispatch) => {

        try {
            const { data } = await axios.post(signUpLink, submitedVal)

            // storing the idtoken into localstorage
            localStorage.setItem("idToken", data.idToken);
            // changing the userauthenticated state to true
            dispatch(userAuthenticated());
            // storing the idToken in the redux store
            dispatch(setIdToken(data.idToken))

        } catch (error) {
            toast.error(error.response.data.error.message);
        }
    }
}



// USER LOGIN ACTION 
export const userLogIn = (submitedVal) => {

    return async (dispatch) => {

        try {
            const { data } = await axios.post(loginLink, submitedVal)

            // storing the idtoken into localstorage
            localStorage.setItem("idToken", data.idToken);
            // changing the userauthenticated state to true
            dispatch(userAuthenticated());
            // storing the idToken in the redux store
            dispatch(setIdToken(data.idToken))

        } catch (error) {
            toast.error(error.response.data.error.message);
        }
    }
}



// If user refres the page and then we need to verify the user with the loacal storage saved id token


export const verfiyUser = (idToken) => {
    return async (dispatch, getState) => {
        try {
            if (idToken) {
                const { data } = await axios.post(verifyUserLink, { idToken: idToken })
                dispatch(userAuthenticated())
                dispatch(setIdToken(idToken))

            }
            else {
                console.log('Error getting the token ')
            }

        } catch (error) {
            console.log(error);
        }
    }
}
