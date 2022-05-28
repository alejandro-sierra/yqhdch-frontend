import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavBarUser } from "../nav-bar-user/nav-bar-user.component";
import { useEffect, useState } from "react";
import { apiRouteBase, AuthToken } from "../../../Constants";
import axios from "axios";
import logo from '../../../assets/img/cook-book.png'
import './nav-bar.styles.css'

export const NavBar = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios.get(apiRouteBase + '/api/me', AuthToken)
        .then(response => setUser(response.data))
    }, [])

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <div>
                    <Navbar.Brand as={Link} to='/'><Image className="logo" src={logo}></Image></Navbar.Brand>
                    <Navbar.Brand as={Link} to='/'>YQHDCH</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbaqr-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        <Nav.Link as={Link} to='/cards'>Cards</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? <NavBarUser user={user} /> : <Nav.Link as={Link} to='/login'>Iniciar sesión</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}