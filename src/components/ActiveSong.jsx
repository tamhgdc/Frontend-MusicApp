import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';

ActiveSong.propTypes = {
    audioRef: PropTypes.object.isRequired,
    activeSong: PropTypes.object.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    currentTime: PropTypes.number.isRequired,
    onDurationChange: PropTypes.func,
    onPause: PropTypes.func,
    onPlay: PropTypes.func,
    onEnded: PropTypes.func,
};

ActiveSong.defaultProps = {
    audioRef: {},
    activeSong: {},
    onNextClick: null,
    onPrevClick: null,
    currentTime: 0,
    onDurationChange: null,
    onPause: null,
    onPlay: null,
    onEnded: null,
}


function ActiveSong(props) {
    const { activeSong, onNextClick, onPrevClick, audioRef, currentTime, onDurationChange, onPause, onPlay, onEnded } = props

    useEffect(() => {
        if (audioRef.current)
            audioRef.current.audio.current.currentTime = currentTime
    }, [currentTime])

    function handleDurationChange() {
        if (onDurationChange)
            onDurationChange()
    }

    function handlePause() {
        if (onPause)
            onPause()
    }

    function handlePlay() {
        if (onPlay)
            onPlay()
    }

    function handleEnded() {
        if (onEnded)
            onEnded()
    }

    return (
        <AudioPlayer
            autoPlay
            ref={audioRef}
            src={activeSong.path ? require("../assets/songs/" + activeSong.path).default : "#"}
            onClickNext={onNextClick}
            onClickPrevious={onPrevClick}
            showJumpControls={false}
            showSkipControls={true}
            onCanPlay={handleDurationChange}
            onPause={handlePause}
            onPlay={handlePlay}
            onEnded={handleEnded}
        />
    );
}

export default ActiveSong;