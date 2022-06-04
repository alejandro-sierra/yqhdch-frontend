import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import Helmet from "react-helmet"
import { useNavigate } from "react-router-dom"
import { apiRouteBase, AuthToken } from "../../../Constants"
import './profile-user.styles.css'
import photo_user from '../../../assets/img/photo-user.png'

export const ProfileUser = () => {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [user, setUser] = useState([])

    const navegate = useNavigate()

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + '/api/me', AuthToken)
                .then(response => setUser(response.data))
        })()
    }, [])

    const handleDetail = e => {
        navegate(`/recipe/details/${e.target.id}`)
    }


    return (
        <>
            <Helmet>
                <title>Perfil | YQHDCH</title>
            </Helmet>
            <div className="mt-3">
                <div className='block-user'>
                    <p><Image src={photo_user} className="image-profile" /></p>
                    <p id={user.id}>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Rol: {user.rol}</p>
                </div>
            </div>
        </>
    )
}