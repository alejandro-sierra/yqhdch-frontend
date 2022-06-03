import axios from "axios";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { apiRouteBase, AuthToken } from "../../../Constants";

export const NavBarUser = ({ user }) => {
    const navegate = useNavigate()

    const logout = () => {
        (async () => {
            await axios.get(apiRouteBase + '/api/logout', AuthToken)
            navegate('/')
            window.location.reload()
        })()
    }

    return (
        user ?
            <Nav>
                <NavDropdown title={user.name} id="basic-nav-dropdown" className="justify-content-end">
                    {user.rol === 'admin' ? <NavDropdown.Item as={Link} to='/create_recipe'>Crear receta</NavDropdown.Item> : <></>}
                    <NavDropdown.Item as={Link} to='/profile'>Perfil</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            : <></>
    );
}