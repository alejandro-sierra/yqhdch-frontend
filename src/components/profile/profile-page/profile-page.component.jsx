import { Image, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from 'react-router-dom';
import user from '../../../assets/img/user.png'
import favorite from '../../../assets/img/favorite.png'
import block from '../../../assets/img/block.png'
import './profile-page.styles.css'
import { useEffect } from "react";
import axios from "axios";
import { apiRouteBase } from "../../../Constants";



export const ProfilePage = () => {


    return (
        <div className="background-generic container-fluid">
            <div className="profile-box">
                <div className="profile-navbar">
                    <Nav.Link as={NavLink} to='/profile'><Image src={user}/></Nav.Link>
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