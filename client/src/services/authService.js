import requester from "../utils/requester"

let url = 'http://localhost:3030'

function register(userData) {
    return requester.post(`${url}/users/register`, userData)
}
function login(userData) {
    return requester.post(`${url}/users/login`, userData)
}
function logout() {
    return requester.get(`${url}/users/logout`)
}

export default {
    register,
    login,
    logout
}