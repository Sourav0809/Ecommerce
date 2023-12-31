import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MyRoutes from "./Routes/MyRoutes";
import { verfiyUser } from "./store/actions/authActions";
import { useDispatch } from "react-redux";
function App() {
  
  // dispacth assignment
  const dispatch = useDispatch();



  /* -------------------------------------------------------------------------- */
  /*           WHEN USER REFRESH THE PAGE WE NEED TO REVERIFY THE USER          */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");

    // dispatching an action to change the verify state and storing the token into store && LocalStorage
    dispatch(verfiyUser(idToken));
  }, []);

  return (
    <>
      <Header />
      <MyRoutes />
    </>
  );
}

export default App;
