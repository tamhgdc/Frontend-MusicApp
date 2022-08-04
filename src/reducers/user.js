const initState = JSON.parse(localStorage.getItem('userState')) || { error: null, user: null }

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS': {
            localStorage.setItem('userState', JSON.stringify({
                error: null,
                user: action.payload,
            }))
            return {
                error: null,
                user: action.payload,
            }
        }

        case 'FETCH_USER_FAILURE': {
            localStorage.setItem('userState', JSON.stringify({
                error: null,
                user: action.payload,
            }))
            return {
                error: action.payload.message,
                user: null
            }
        }

        case 'LOG_OUT': {
            localStorage.clear()
            return initState
        }
        default: {
            return state
        }

    }
}

export default userReducer