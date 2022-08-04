import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

Upload.propTypes = {

};

function Upload(props) {
    function handleUploadSubmit(formRef) {
        const uploadForm = formRef.current
        const formData = new FormData(uploadForm)

        async function uploadMusic() {

        }

        uploadMusic()
    }

    return (
        <Container>
            <h1>Tải bài hát</h1>
            <Upload onUpload={handleUploadSubmit} />
        </Container>
    );
}

export default Upload;