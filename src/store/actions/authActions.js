import { setIdToken, userAuthenticated } from "../reducers/authSlice";


const setUserAuthenticated = (idToken) => {
    return (dispatch) => {
        dispatch(userAuthenticated())
        dispatch(setIdToken(idToken))
    }
}


export { setUserAuthenticated }


