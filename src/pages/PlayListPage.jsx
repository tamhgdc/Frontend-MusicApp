import React, { useEffect, useState } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import { PLAYLISTS } from '../assets/db/db'
import ActiveSong from '../components/ActiveSong';
import Banner from '../components/Banner';
import Pagination from '../components/Pagination';
import PlayList from '../components/PlayList';
import SongLyric from './SongLyric';

function PlayListPage() {
    const [activePlayList, setActivePlayList] = useState({})
    const [activeSong, setActiveSong] = useState({})
    const [pagination, setPagination] = useState({
        activePage: 1,
        totalRow: 8,
        pageSize: 8
    })

    const { id } = useParams()

    useEffect(() => {
        const newPlayList = PLAYLISTS.filter(playlist => playlist.id == id)[0]
        setActivePlayList(newPlayList)
        console.log(newPlayList)
    }, [])

    function handleSongClick({ song }) {
        setActiveSong(song)
    }

    function handleNextClick() {
        const index = activePlayList.songs.findIndex((song) => song === activeSong)
        setActiveSong(index == activePlayList.songs.length - 1 ? activePlayList.songs[0] : activePlayList.songs[index + 1])
    }

    function handlePrevClick() {
        const index = activePlayList.songs.findIndex((song) => song === activeSong)
        setActiveSong(index == 0 ? activePlayList.songs[activePlayList.songs.length - 1] : activePlayList.songs[index - 1])
    }

    function handlePageChange(newPage) {
        setPagination({
            ...pagination,
            activePage: newPage
        })
    }

    return (
        <div className="body">
            <Banner />
            <Routes>
                <Route
                    path='/'
                    element={<PlayList
                        id={activePlayList.id}
                        songList={activePlayList.songs}
                        title={activePlayList.name}
                        onSongClick={handleSongClick}
                    />}
                />
                <Route path='/karaoke' element={<SongLyric currentLyrics={"chẳng hiểu tại vì điều gì mà ta cách xa như vậy, ngày mình buông tay"} />} />
            </Routes>
            <ActiveSong
                activeSong={activeSong}
                onNextClick={handleNextClick}
                onPrevClick={handlePrevClick}
            />
            {/* <Pagination
                activePage={pagination.activePage}
                totalRow={pagination.totalRow}
                pageSize={pagination.pageSize}
                onChange={handlePageChange}
            /> */}
        </div>
    );
}

export default PlayListPage;