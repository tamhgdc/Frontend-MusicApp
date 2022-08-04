export const addPlayList = (playList) => {
    return {
        type: 'ADD_PLAYlIST',
        payload: playList
    }
}

export const changeActiveSong = (songID) => {
    return {
        type: 'CHANGE_ACTIVE_SONG',
        payload: songID
    }
}

export const changeCurrentTime = (currentTime) => {
    return {
        type: 'CHANGE_CURRENT_TIME',
        payload: currentTime
    }
}

export const removePlayList = () => {
    return {
        type: 'REMOVE_PLAYLIST'
    }
}