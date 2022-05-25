import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, useHref } from "react-router-dom";
import './nav-bar.styles.css'

export const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to='/'>YQHDCH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Iniciar sesión</Nav.Link>
                        <Nav.Link as={Link} to='/cards'>Cards</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="justify-content-end">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}