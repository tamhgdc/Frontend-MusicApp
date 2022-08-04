import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function Myplaylist() {
    function handleRemoveSong() {
        const is_delete = window.confirm("bạn có chắc muốn xoá")
        if (is_delete)
            alert("Xoá thành công")
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên bài hát</th>
                    <th>Lời bài hát</th>
                    <th>Nhịp bài hát</th>
                    <th>Đường dẫn</th>
                    <th>Tương tác</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Bước qua nhau</td>
                    <td>dao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\nCuộc đời cứ...\n trôi\n\
                        Ta nhìn lại ngày tháng...\n còn bên nhau\n\
                        Cùng những \nthăng trầm...\n\
                        Tại sao không vẫy...\n tay chào\n nơi ta đứng...\n bây giờ?\n\
                        Hai nơi hai người dưng\n...\n\
                        Đợi em bước...\n qua\n\
                        Để khiến anh nhận ra là\n đôi mắt em\n còn đang buồn\n...\n\
                        Màu hoa cài áo\n vẫn còn\n như lời hứa\n đã từng\n\
                        Giờ đây còn như xưa?\n...\n\
                        Dòng người vội vàng\n bước qua...\n\
                        Chợt như chiếc hôn\n thế thôi...\n\
                        Đôi môi chia làm đôi....\n\
                        Như ta đang mong vậy thôi...\n\
                        Người nghẹn ngào\n bước đi\n\
                        Chợt như chúng ta\n quay về\n\
                        Giấu trái tim mình\n và đừng thổn thức khi thấy nhau\n...\n\
                        Đoàn tàu kia dừng lại\n\
                        Còn hai ta bước\n qua nhau</td>
                    <td>Nhịp bài hát</td>
                    <td>https://www.nhaccuatui.com/bai-hat/buoc-qua-nhau-vu.EdENCgJm9dAa.html</td>
                    <td>
                        <FontAwesomeIcon onClick={handleRemoveSong} icon={faTrash} />
                    </td>
                </tr>

            </tbody>
        </Table>
    );
}

export default Myplaylist;