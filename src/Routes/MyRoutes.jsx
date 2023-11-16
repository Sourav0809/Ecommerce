import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AuthPage from "../Pages/AuthPage";
import ProfileViewPage from "../Pages/ProfileViewPage";
import { useSelector } from "react-redux";
import ProductPage from "../Pages/ProductPage";

const MyRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<ProfileViewPage />} />
          <Route path="/profile" element={<ProfileViewPage />} />
          <Route path="*" element={<HomePage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<AuthPage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/profile" element={<AuthPage />} />
          <Route path="*" element={<HomePage />} />
        </>
      )}
    </Routes>
  );
};

export default MyRoutes;
