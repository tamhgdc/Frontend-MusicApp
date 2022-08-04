import img1 from '../images/imgsong1.jpg'
import img2 from '../images/imgsong2.jpg'
import img3 from '../images/imgsong3.jpg'
import img4 from '../images/imgsong4.jpg'
import img5 from '../images/imgsong5.jpg'
export const PLAYLISTS = [
    {
        id: 1,
        name: "Mới Phát Hành",
        user: 1,
        songs: [
            { id: 1, name: "Tháng năm", path: "mot.mp3", img: img5, author: "Soobin Hoàng Sơn" },
            {
                id: 2, name: "Bước qua nhau", path: "hai.mp3", img: img1, author: "Vũ", duration: 2.4,
                lyrics:
                    "dao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\ndao dau\nCuộc đời cứ...\n trôi\n\
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
Còn hai ta bước\n qua nhau" },
            { id: 3, name: "Khoảng cách", path: "ba.mp3", img: img2, author: "The Cassette" },
            { id: 4, name: "Sài gòn mưa rơi", path: "bon.mp3", img: img3, author: "MC Goku" },
        ]
    },
    {
        id: 2,
        name: "Trending",
        user: 1,
        songs: [
            { id: 1, name: "Tháng năm", path: "mot.mp3", img: img5, author: "Soobin Hoàng Sơn" },
            { id: 4, name: "Sài gòn mưa rơi", path: "bon.mp3", img: img3, author: "MC Goku" },
            { id: 2, name: "Bước qua nhau", path: "hai.mp3", img: img1, author: "Vũ" },
            { id: 5, name: "Chuyện đôi ta", path: "nam.mp3", img: img4, author: "Da LAB" }
        ]
    }

]

export const GENRES = [
    {
        id: 1,
        name: "nhạc Pop",
        user: 1,
        songs: [
            { id: 1, name: "Tháng năm", path: "mot.mp3", img: img5, author: "Soobin Hoàng Sơn" },
            { id: 2, name: "Bước qua nhau", path: "hai.mp3", img: img1, author: "Vũ" },
            { id: 3, name: "Khoảng cách", path: "ba.mp3", img: img2, author: "The Cassette" },
            { id: 4, name: "Sài gòn mưa rơi", path: "bon.mp3", img: img3, author: "MC Goku" },
        ]
    },
    {
        id: 2,
        name: "Nhạc ballad",
        user: 1,
        songs: [
            { id: 1, name: "Tháng năm", path: "mot.mp3", img: img5, author: "Soobin Hoàng Sơn" },
            { id: 4, name: "Sài gòn mưa rơi", path: "bon.mp3", img: img3, author: "MC Goku" },
            { id: 2, name: "Bước qua nhau", path: "hai.mp3", img: img1, author: "Vũ" },
            { id: 5, name: "Chuyện đôi ta", path: "nam.mp3", img: img4, author: "Da LAB" }
        ]
    }
]

const ROLE = {
    user: "USER",
    admin: "ADMIN"
}
export const USER = [
    { id: 1, username: "anhtuan1507", password: "123", name: "Pham Anh Tuan", role: ROLE['user'] },
    { id: 2, username: "admin1507", password: "123", name: "Tran Anh Khoa", role: ROLE['admin'] }
]

export default { PLAYLISTS, GENRES, USER }

