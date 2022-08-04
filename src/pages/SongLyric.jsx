import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap'
import '../assets/scss/Karaoke.css'
import ActiveSong from '../components/ActiveSong';
import { useSelector } from 'react-redux';

function SongLyric() {
    const activePlayList = useSelector(state => state.activePlayList)

    const [activeSong, setActiveSong] = useState({
        id: 0, name: "", path: "", img: "", author: "", duration: 2.4, lyrics: ""
    })
    const [arrLyrics, setArrLyrics] = useState([])
    const [currentLyrics, setCurrentLyrics] = useState(() => {
        return activeSong ? activeSong.lyrics : ''
    })
    const [duartionChange, setDurationChange] = useState(true)

    const audioRef = useRef(null)
    const lyricInterVal = useRef(null)
    const indexRef = useRef(Math.trunc(activePlayList.activeSong.currentTime / activeSong.duration))

    function handleNextClick() {
        const index = activePlayList.songs.findIndex((song) => song === activeSong)
        setActiveSong(index == activePlayList.songs.length - 1 ? activePlayList.songs[0] : activePlayList.songs[index + 1])
    }
    function handlePrevClick() {
        const index = activePlayList.songs.findIndex((song) => song === activeSong)
        setActiveSong(index == 0 ? activePlayList.songs[activePlayList.songs.length - 1] : activePlayList.songs[index - 1])
    }
    function handleDurationChange() {
        indexRef.current = Math.trunc(audioRef.current.audio.current.currentTime / activeSong.duration)
        setDurationChange(!duartionChange)
    }
    function handlePause() {
        clearInterval(lyricInterVal.current)
    }
    function handlePlay() {
        setDurationChange(!duartionChange)
    }
    function handleEnded() {
        clearInterval(lyricInterVal.current)
    }

    useEffect(() => {
        const song = activePlayList.songs.find(song => song.id == activePlayList.activeSong.id)
        setActiveSong(song)
    }, [activePlayList])

    useEffect(() => {
        if (activeSong) {
            setArrLyrics(activeSong.lyrics.split('\n'))
        }
    }, [activeSong])

    useEffect(() => {

        if (activeSong && arrLyrics) {
            setCurrentLyrics(arrLyrics[indexRef.current])

            lyricInterVal.current = setInterval(() => {
                setCurrentLyrics(arrLyrics[indexRef.current++])
            }, activeSong ? activeSong.duration * 1000 : 5000)
        }

        return () => { clearInterval(lyricInterVal.current) }
    }, [arrLyrics, duartionChange])

    return (
        <>
            <Container
                className="karaoke"
            >
                {currentLyrics}
            </Container>
            <ActiveSong
                audioRef={audioRef}
                activeSong={activeSong}
                onNextClick={handleNextClick}
                onPrevClick={handlePrevClick}
                currentTime={activePlayList.activeSong.currentTime}
                onDurationChange={handleDurationChange}
                onPause={handlePause}
                onPlay={handlePlay}
                onEnded={handleEnded}
            />
        </>
    );
}

export default SongLyric;