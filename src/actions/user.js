import { USER } from '../assets/db/db'
export const login = ({ username, password }) => {
    const response_user = USER.find(u => u['username'] == username && u['password'] == password)
    if (response_user)
        return {
            type: 'FETCH_USER_SUCCESS',
            payload: response_user
        }

    else
        return {
            type: 'FETCH_USER_FAILURE',
            payload: { message: "đăng nhập thất bại" }
        }

}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

