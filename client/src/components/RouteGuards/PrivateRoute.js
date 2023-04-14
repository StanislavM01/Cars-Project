import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function PrivateRoute() {
    let { isAuth } = useContext(UserContext)

    if (!isAuth) {
      
        return (
            <Navigate to={'/login'}/>
        )
    } else {
        return (
            <Outlet />
        )

    }
}

export default PrivateRoute