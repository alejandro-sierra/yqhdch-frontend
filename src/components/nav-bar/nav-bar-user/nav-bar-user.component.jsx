import axios from "axios";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthToken } from "../../../Constants";

export const NavBarUser = ({ user }) => {
    const navegate = useNavigate()

    const logout = () => {
        (async () => {
            // axios.get('http://yquehagodecomerhoy.xyz:8000/api/logout',
            await axios.get('http://localhost:8000/api/logout', AuthToken)
            navegate('/')
            window.location.reload()
        })()
    }

    console.log(user);

    return (
        user ?
            <Nav>
                <NavDropdown title={user.name} id="basic-nav-dropdown" className="justify-content-end">
                    {user.rol === 'admin' ? <NavDropdown.Item as={Link} to='/cards'>Administración</NavDropdown.Item> : <></>}
                    <NavDropdown.Item as={Link} to='/cards'>Perfil</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            : <></>
    );
}