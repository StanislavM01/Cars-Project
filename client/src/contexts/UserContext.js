import { createContext, useState } from "react"
import useLocaleStorage from "../hooks/useLocaleStorage"

export let UserContext = createContext()

function UserProvider({ children }) {
    let [userInfo, setUserInfo] = useLocaleStorage({})
    let [isAuth, setIsAuth] = useState(userInfo.email ? true : false) 

    function login(userData) {
        setUserInfo({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            accessToken: userData.accessToken,
            _id: userData._id
        })
        setIsAuth(true)
    }

    function logout() {
        setUserInfo('{}')
        setIsAuth(false)
    }
    

    return (
        <UserContext.Provider value={{ userInfo, login, logout, isAuth }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider