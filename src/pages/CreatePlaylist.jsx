import React, { useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreatePlaylist() {
    const userState = useSelector(state => state.user)
    const navigate = useNavigate()
    const formRef = useRef(null)
    function handleCreatePlaylist() {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function createPlaylist() {

        }

        createPlaylist()
    }

    useEffect(() => {
        if (userState.user == null)
            navigate('/login')
    })

    return (
        <Form ref={formRef} onSubmit={handleCreatePlaylist} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tên Playlist</Form.Label>
                <Form.Control type="text" placeholder="Playlist name" name="name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Tải bải hát<thead></thead></Form.Label>
                <Form.Control type="file" name="songFile" accept=".mp3" multiple />
            </Form.Group>

            <Button variant="primary" type="submit">
                Tạo
            </Button>
        </Form>
    );
}

export default CreatePlaylist;