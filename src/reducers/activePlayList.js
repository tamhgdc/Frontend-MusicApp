const initState = {
    id: 0,
    name: '',
    songs: [],
    user: 0,
    activeSong: {
        id: 1,
        currentTime: 0
    }
}

const playListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PLAYlIST':
            return {
                ...action.payload,
                activeSong: {
                    id: action.payload.activeSong,
                    currentTime: 0
                }
            }
        case 'CHANGE_ACTIVE_SONG':
            return {
                ...state,
                activeSong: {
                    id: action.payload,
                    currentTime: 0
                }
            }
        case 'CHANGE_CURRENT_TIME':
            return {
                ...state,
                activeSong: {
                    id: state.activeSong.id,
                    currentTime: action.payload
                }
            }
        case 'REMOVE_PLAYLIST':
            return {
                ...initState
            }
        default: return state
    }
}

export default playListReducer