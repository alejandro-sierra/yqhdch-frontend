import { Image, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import favorite from '../../../assets/img/favorite.png'
import block from '../../../assets/img/block.png'
import './profile-page.styles.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { apiRouteBase, AuthToken } from "../../../Constants";
import userIMG from '../../../assets/img/user.png'



export const ProfilePage = () => {

    const navegate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                await axios.get(apiRouteBase + '/api/me', AuthToken)
                .then(response => setUser(response.data))
            } catch (e) {
                navegate('/')
            }
        })()
    }, [])

    return (
        <div className="background-generic container-fluid">
            <div className="profile-box">
                <div className="profile-navbar">
                    <Nav.Link as={NavLink} to='/profile'><Image src={userIMG}/></Nav.Link>
                    <Nav.Link as={NavLink} to='favorites'><Image src={favorite}/></Nav.Link>
                    <Nav.Link as={NavLink} to='block'><Image src={block}/></Nav.Link>
                </div>
                <div className="admin-body-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}