import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutesIsLogIn = (isLogIn) => {
   console.log(isLogIn);
  return (
    isLogIn? <Outlet /> : <Navigate to='/SignIn' />
  )
};

export default PrivateRoutesIsLogIn;
