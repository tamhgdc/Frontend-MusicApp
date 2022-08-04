import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import PlayListPage from '../pages/PlayListPage';
import Register from '../pages/Register'
import SongLyric from '../pages/SongLyric';
import UserInfo from '../pages/UserInfo';
import Upload from '../pages/Upload';
import Myplaylist from '../pages/Myplaylist';
import CreatePlaylist from '../pages/CreatePlaylist';

function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='login/' element={<Login />} />
                <Route path='register/' element={<Register />} />
                <Route path='user-info/' element={<UserInfo />} />
                <Route path="upload/" element={<Upload />} />
                <Route path='playlist/:id' element={<PlayListPage />} />
                <Route path='lyric/' element={<SongLyric />} />
                <Route path='myplaylist/' element={<Myplaylist />} />
                <Route path='createplaylist/' element={<CreatePlaylist />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes;