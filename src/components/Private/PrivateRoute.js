import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userAuth);

  return user ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
