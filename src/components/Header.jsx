import React from 'react';

import { Container, Form, FormControl, Nav, Navbar, Button, Dropdown, NavDropdown } from 'react-bootstrap';

import logo from '../assets/images/logo.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import HeaderUserInfo from './HeaderUserInfo';

import { PLAYLISTS, GENRES } from '../assets/db/db'

function Header() {
    // const [filter, setFilter] = useState({
    //     title_like: ''
    // })

    // function handleSearchTermSubmit(value) {
    //     setFilter({
    //         ...filter,
    //         title_like: value
    //     })
    // }

    // useEffect(() => {
    //     async function searchSong() {

    //     }
    //     searchSong()
    // }, [filter])
    const iconUser = React.forwardRef(({ children, onClick }, ref) => (
        <FontAwesomeIcon
            style={{ marginLeft: "1rem" }}
            icon={faUser} size="lg"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </FontAwesomeIcon>
    ));

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Playlist" id="basic-nav-dropdown">
                            {
                                PLAYLISTS.map(playlist => <NavDropdown.Item key={playlist.id} href={`/playlist/${playlist.id}`}>{playlist.name}</NavDropdown.Item>)
                            }
                        </NavDropdown>
                        <NavDropdown title="Chủ đề" id="basic-nav-dropdown">
                            {
                                GENRES.map(genre => <NavDropdown.Item key={genre.id} href={`/genre/${genre.id}`}>{genre.name}</NavDropdown.Item>)
                            }
                        </NavDropdown>
                        <Nav.Link href="/createplaylist">Tạo playlist</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Tìm </Button>
                    </Form>
                    <Dropdown>
                        <Dropdown.Toggle as={iconUser} id="dropdown-custom-components">
                        </Dropdown.Toggle>
                        <HeaderUserInfo />
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;