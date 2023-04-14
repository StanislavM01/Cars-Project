import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
function Navigation() {
    let { isAuth } = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container-fluid">


                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link mx-2 active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/catalog">Catalog</Link>
                        </li>

                        {!isAuth
                            ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/register'>Register</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/create'>Create Car Offer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/logout'>Logout</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/my-profile'>My Profile</Link>
                                </li>

                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation