import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/user'
import { useEffect } from 'react';

HeaderUserInfo.propTypes = {
};


function HeaderUserInfo(props) {
    const userState = useSelector(state => state.user)
    const dispatch = useDispatch()

    function handleLogout() {
        const action = logout()
        dispatch(action)
    }

    useEffect(() => {
        console.log(userState)
        if (userState.error != null)
            alert(userState.error)
    })

    return (
        <Dropdown.Menu>
            {
                userState.user != null
                    ?
                    <>
                        <Dropdown.Item href="/user-info">Xem thông tin</Dropdown.Item>
                        <Dropdown.Item href="/myplaylist">Playlist của tôi</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                            đăng xuất
                        </Dropdown.Item>
                    </>
                    :
                    <Dropdown.Item href="/login">Đăng nhập</Dropdown.Item>
            }
        </Dropdown.Menu>

    );
}

export default HeaderUserInfo;