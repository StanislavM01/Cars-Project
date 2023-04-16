import { useState } from "react";

function useLocaleStorage(defaultValue) {
    let [state, setState] = useState(() => {
        let authToken = localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth'))
            : defaultValue
        return authToken
    })

    function changeLocaleStorage(userInfo) {
        if (userInfo !== '{}') {
           setState(userInfo)
            localStorage.setItem('auth',JSON.stringify(userInfo))
        }else{
            localStorage.clear()
            setState({})
        }
    }

    return [state, changeLocaleStorage]
}

export default useLocaleStorage