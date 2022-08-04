import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

RegisterForm.propTypes = {
    onSaveUser: PropTypes.func.isRequired,
};

function RegisterForm(props) {
    const { onSaveUser } = props
    const formRef = useRef(null)

    function handleUserSave(e) {
        e.preventDefault()
        if (onSaveUser)
            onSaveUser(formRef)
    }
    return (
        <Form ref={formRef} onSubmit={handleUserSave} enctype="multipart/form-data">
            <Form.Group className="mb-3">
                <Form.Label>Tài khoản</Form.Label>
                <Form.Control type="text" placeholder="User Name" name="username" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Họ</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="first_name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Tên</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="last_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>SDT</Form.Label>
                <Form.Control type="text" placeholder="Phone" name="phone" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>CMND</Form.Label>
                <Form.Control type="text" placeholder="Idnetity" name="identity" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Hình đại diện</Form.Label>
                <Form.Control type="file" name="avatar" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Cập nhật
            </Button>
        </Form>
    );
}
export default RegisterForm;