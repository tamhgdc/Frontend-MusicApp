import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import '../assets/scss/Playlist.scss'
PlayList.propTypes = {
    id: PropTypes.number,
    songList: PropTypes.array,
    onSongClick: PropTypes.func,
    title: PropTypes.string,
    md: PropTypes.number,
    onPageChange: PropTypes.func,
};

PlayList.defaultProps = {
    id: 1,
    songList: [],
    onSongClick: null,
    title: '',
    md: 4,
    onPageChange: null
}

function PlayList(props) {
    const { songList, onSongClick, title, id, md, onPageChange } = props

    function handleSongClick(song) {
        if (onSongClick)
            onSongClick({ song, playListID: id })
        if (onPageChange)
            onPageChange()
    }
    return (
        <Container style={{ marginTop: "15px" }}>
            <h1
                style={{ textTransform: "uppercase", color: "#2daaed" }}
            >
                {title}
            </h1>
            <Row xs={1} md={md} className="g-4">
                {songList.map((song) => (
                    <Col key={song.id}>
                        <Card
                            className="Song"
                            key={song.id}
                        >
                            <Card.Img variant="top" src={song.img} style={{ height: "250px" }} />
                            <Card.Body>
                                <Card.Title>{song.name}</Card.Title>
                                <Card.Text>
                                    {song.author}
                                </Card.Text>
                            </Card.Body>
                            <div className="SongHover">
                                <FontAwesomeIcon onClick={() => handleSongClick(song)} className="SongHover__item" icon={faPlayCircle} />
                                <FontAwesomeIcon className="SongHover__item" icon={faHeart} />
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            < br />
        </Container>
    );
}

export default PlayList;