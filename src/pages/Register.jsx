import React from 'react';

import { Container } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import UserInfoForm from '../components/RegisterForm';

function Register() {
    const navigative = useNavigate()

    function handleRegisterSubmit(formRef) {
        const registerForm = formRef.current
        const formData = new FormData(registerForm)

        async function createCustomer() {
            try {
                localStorage.setItem('username', formData.get('account.username'))
                localStorage.setItem('password', formData.get('account.password'))
                navigative('/')
            }
            catch (err) {
                console.log(err)
            }
        }

        createCustomer()
    }

    return (
        <Container>
            <h1>Đăng ký</h1>
            <UserInfoForm onSaveUser={handleRegisterSubmit} />
        </Container>
    );
}

export default Register;
