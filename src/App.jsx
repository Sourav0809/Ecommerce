import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MyRoutes from "./Routes/MyRoutes";
import { verfiyUser } from "./store/actions/authActions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*           WHEN USER REFRESH THE PAGE WE NEED TO REVERIFY THE USER          */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
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
