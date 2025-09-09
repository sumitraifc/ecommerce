import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  // Retrieve the data from localStorage
  const savedData = localStorage.getItem('user');
  console.log("savedData",savedData);

  // Parse and validate if the user is authenticated
  const isAuthenticated = savedData ? JSON.parse(savedData)?.userid : null;

  // Return the appropriate route based on authentication
  return isAuthenticated ? children : <Navigate to="/register" />;
};

export default ProtectedRoutes;