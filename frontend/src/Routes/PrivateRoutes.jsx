// import { useContext } from "react";

import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { Navigate, useLocation } from "react-router-dom";

// import { Navigate, useLocation } from "react-router";
// import { AuthContext } from "../providers/AuthProviders";

// const PrivateRoutes = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();
//   if (loading) {
//     return <span className="loading loading-ball loading-lg"></span>;
//   }
//   if (user) {
//     return children;
//   }
//   return <Navigate to={"/login"} state={{from:location}} replace></Navigate>;
// };

// export default PrivateRoutes;


const PrivateRoutes = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoutes