import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { setUserAuthenticated } from "../../../store/actions/authActions";
import { useDispatch } from "react-redux";
const Authentication = () => {
  const [login, setLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // For switch to login or sign up
  const switchUser = () => {
    setLogin((prev) => {
      return !prev;
    });
  };

  // for admin switch
  const adminSwitch = () => {
    setAdminLogin(true);
  };

  const hideAdminHandeler = () => {
    setAdminLogin(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                   WHEN USER CREATE A NEW ACCOUNT OR LOGIN                  */
  /* -------------------------------------------------------------------------- */
  const submitFormHandeler = async (e) => {
    e.preventDefault();
    const submitedVal = {
      email: email,
      password: password,
    };

    try {
      // when user create a new account

      if (!login && !adminLogin) {
        if (password.trim() === confirmPwd.trim()) {
          const { data } = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4cRRZ8NF7yCvzoAJgGTLJCmXlJjlo7T0",
            submitedVal
          );

          // storing the idtoken into localstorage
          localStorage.setItem("idToken", data.idToken);
          dispatch(setUserAuthenticated(data.idToken));
          // navigating to the profile page after successfull sign up

          navigate("/profile");
        } else {
          alert("Password & Confirm Password should be match !");
        }

        /* -------------------------------------------------------------------------- */
        /*                     WHEN USER TRY TO LOGIN HIS ACCOUNT                     */
        /* -------------------------------------------------------------------------- */
      } else if (login && !adminLogin) {
        console.log("hello");
        const { data } = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4cRRZ8NF7yCvzoAJgGTLJCmXlJjlo7T0",
          submitedVal
        );

        localStorage.getItem("idToken", data.idToken);
        dispatch(setUserAuthenticated(data.idToken));

        navigate("/profile");
      }
    } catch (error) {
      toast.error(error.response.data.error.message);
    }
  };

  return (
    <>
      <div className=" bg-blue-300 w-screen h-[calc(100vh-4rem)]">
        <div className=" flex justify-center items-center">
          <h1 className=" text-5xl font-semibold font-custom mt-20">
            {adminLogin
              ? "Welcome Admin ! "
              : login
              ? "Welcome Back ! "
              : "Create Account"}
          </h1>
        </div>

        {/*Authentication form  */}
        <div className=" m-auto mt-5 md:w-[50rem] w-[90%] p-5 bg-[#f3ecec9c] rounded-md shadow-lg">
          <form className=" p-5 flex flex-col gap-2">
            <div className=" flex flex-col">
              <label htmlFor="Name" className=" text-lg">
                {adminLogin ? "Admin Email" : "Email"}
              </label>
              <input
                type="email"
                placeholder="Email"
                className=" p-2 rounded-sm bg-white"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="password" className=" text-lg">
                {adminLogin ? "Admin Password" : "Password"}
              </label>
              <input
                type="password"
                placeholder="Password"
                className=" p-2 rounded-sm bg-white"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {!login && !adminLogin && (
              <div className=" flex flex-col">
                <label htmlFor="password" className=" text-lg">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className=" p-2 rounded-sm bg-white"
                  value={confirmPwd}
                  onChange={(e) => {
                    setConfirmPwd(e.target.value);
                  }}
                />
              </div>
            )}
            <div className=" pt-4">
              <button
                className="py-2 px-5 bg-blue-500 text-white rounded-md "
                onClick={submitFormHandeler}
              >
                {adminLogin
                  ? "Admin Login"
                  : login
                  ? "Log in "
                  : "Create Account"}
              </button>
            </div>

            {/* Switch to log in or admin panel */}

            <div className=" mt-5 flex justify-between items-center">
              <div>
                <h1>
                  {adminLogin
                    ? "Are you User ?"
                    : login
                    ? "Are You New User ? "
                    : "Already have an account ? "}
                </h1>
                {adminLogin ? (
                  <>
                    <h1
                      className="text-blue-600 font-semibold font-custom cursor-pointer"
                      onClick={hideAdminHandeler}
                    >
                      Switch To User
                    </h1>
                  </>
                ) : (
                  <>
                    <h1
                      className="text-blue-600 font-semibold font-custom cursor-pointer"
                      onClick={switchUser}
                    >
                      {login ? "Create Account" : "Log in"}
                    </h1>
                  </>
                )}
              </div>

              <div>
                {!adminLogin && (
                  <>
                    <h1>Are You Admin ? </h1>
                    <h1
                      className=" text-blue-600 font-semibold font-custom cursor-pointer"
                      onClick={adminSwitch}
                    >
                      Admin Log in
                    </h1>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
