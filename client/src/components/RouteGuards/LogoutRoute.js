import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Outlet, Navigate } from "react-router-dom"

function LogoutRoute() {
    let { isAuth } = useContext(UserContext)

    
    if (!isAuth) {
        return (
            <Outlet />
        )
    } else {
        return (
            <Navigate to={'/'} />
        )
    }

}

export default LogoutRoute