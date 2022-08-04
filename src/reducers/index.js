import { combineReducers } from 'redux'

import userReducer from './user'
import playListReducer from './activePlayList'

const rootReducer = combineReducers({
    user: userReducer,
    activePlayList: playListReducer,
})

export default rootReducer