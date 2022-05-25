import { Container, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import { Link, useHref } from "react-router-dom";
import logo from './cook-book.png'
import './nav-bar.styles.css'

export const NavBar = () => {

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
                        <Nav.Link as={Link} to='/login'>Iniciar sesión</Nav.Link>
                        <Nav.Link as={Link} to='/cards'>Cards</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Admin" id="basic-nav-dropdown" className="justify-content-end">
                            <NavDropdown.Item as={Link} to='/cards'>Administración</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/cards'>Perfil</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/cards'>Cerrar sesión</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}