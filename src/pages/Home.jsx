import React, { useState, useRef, useEffect } from 'react'

import ActiveSong from '../components/ActiveSong'
import PlayList from '../components/PlayList'
import { PLAYLISTS } from '../assets/db/db'
import Banner from '../components/Banner'
import { addPlayList, changeCurrentTime } from '../actions/activePlayList'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Home() {
    const userState = useSelector(state => state.user)

    const audioRef = useRef(null)
    const activePlaylist = useSelector(state => state.activePlayList)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [activeSong, setActiveSong] = useState({})

    const [playLists, setPlayLists] = useState(() => {
        return PLAYLISTS
    })

    useEffect(() => {
        if (userState.user != null && userState.user.role == 'ADMIN')
            navigate("/admin")
    })

    function handleSongClick({ song, playListID }) {
        const activePL = playLists.filter(playList => playList.id === playListID)[0]
        const action = addPlayList({ ...activePL, activeSong: song.id })
        dispatch(action)
        setActiveSong(song)
    }

    function handleNextClick() {
        const index = activePlaylist.songs.findIndex((song) => song === activeSong)
        setActiveSong(index == activePlaylist.songs.length - 1 ? activePlaylist.songs[0] : activePlaylist.songs[index + 1])
    }

    function handlePrevClick() {
        const index = activePlaylist.songs.findIndex((song) => song === activeSong)
        setActiveSong(index == 0 ? activePlaylist.songs[activePlaylist.songs.length - 1] : activePlaylist.songs[index - 1])
    }

    function handlePageChange() {
        const currentTime = audioRef.current.audio.current.currentTime || 0
        const action = changeCurrentTime(currentTime)
        dispatch(action)
        navigate('/lyric')
    }

    return (
        <div className="body">
            <Banner />
            {playLists.map((p, index) => <PlayList key={p.id} songList={p.songs} title={p.name} onSongClick={handleSongClick} id={p.id} onPageChange={handlePageChange} />)}
            <ActiveSong audioRef={audioRef} activeSong={activeSong} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
        </div>
    );
}

export default Home;