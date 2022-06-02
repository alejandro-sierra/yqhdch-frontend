import './admin-page.styles.css'
import { Nav } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';



export const Admin = () => {
    return (
        <div className="admin-body-block">
            <div className="admin-body-navbar">
                <div>
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                </div>
                <div>
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                </div>
                <div>
                    <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                </div>
            </div>
            <div className="admin-body-content">
                <Outlet />
            </div>
        </div>
    )
}