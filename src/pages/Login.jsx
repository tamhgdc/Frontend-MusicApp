import React from 'react';

import { Container } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { login } from '../actions/user';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function handleLoginSubmit(formValues) {
        const { username, password } = formValues

        try {
            const action = login({ username, password })
            dispatch(action)
            navigate('/');
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <h1>Đăng nhập</h1>
            <LoginForm onLoginSubmit={handleLoginSubmit} />
        </Container>
    );
}

export default Login;