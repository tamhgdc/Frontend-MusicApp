import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

UploadForm.propTypes = {
    onUpload: PropTypes.func.isRequired,
};

UploadForm.defaultProps = {
    onUpload: null
}

function UploadForm(props) {
    const { onUpload } = props
    const formRef = useRef(null)

    function handleUpload(e) {
        e.preventDefault()
        if (onUpload)
            onUpload(formRef)
    }

    return (
        <Form ref={formRef} onSubmit={handleUpload} enctype="multipart/form-data">

            <Form.Group className="mb-3" >
                <Form.Label>Tên tài hát</Form.Label>
                <Form.Control type="text" placeholder="song name" name="name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Lời bài hát</Form.Label>
                <Form.Control type="file" placeholder="song lyric" name="name" accept=".txt" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Nhịp bài hát</Form.Label>
                <Form.Control type="number" placeholder="song duration" name="name" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Chọn bài hát</Form.Label>
                <Form.Control type="file" name="songfile" accept=".mp3" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Tải lên
            </Button>
        </Form>
    );
}

export default UploadForm;