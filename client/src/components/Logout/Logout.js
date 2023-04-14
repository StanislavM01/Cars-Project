import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import authService from "../../services/authService";




function Logout() {
    let { logout } = useContext(UserContext)
    let navigate = useNavigate()
    authService.logout()
        .then(result => {
            logout()
            navigate('/login')
        })
        .catch(err => {
            alert('Try again later to loggout')
        })
}

export default Logout