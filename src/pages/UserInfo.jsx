import React from 'react';

import { Container } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import UserInfoForm from '../components/UserInfoForm';

function UserInfo() {
    const navigative = useNavigate()

    function handleUpdateSubmit(formRef) {
        const updateForm = formRef.current
        const formData = new FormData(updateForm)

        async function createCustomer() {

        }

        createCustomer()
    }

    return (
        <Container>
            <h1>Cập nhật tài khoản</h1>
            <UserInfoForm onSaveUser={handleUpdateSubmit} />
        </Container>
    );
}

export default UserInfo;