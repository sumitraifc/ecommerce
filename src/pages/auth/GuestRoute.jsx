import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const GuestRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = user?.userid;

  // Redirect authenticated users to home
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default GuestRoute;