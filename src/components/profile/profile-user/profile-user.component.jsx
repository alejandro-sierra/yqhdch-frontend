import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import Helmet from "react-helmet"
import { useNavigate } from "react-router-dom"
import { apiRouteBase, AuthToken } from "../../../Constants"
import userImg from '../../../assets/img/user.png'

export const ProfileUser = () => {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [user, setUser] = useState([])

    const navegate = useNavigate()

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + '/api/me', AuthToken)
                .then(response => setUser(response.data))
                .catch(console.log('No hay usuario registrado'))
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
            <div className="block-box">
                <div className='block-user'>
                    <p><Image src={userImg} className="image-dish" /></p>
                    <p id={user.id}>Nombre: {user.name}</p>
                    <p id={user.id}>Email: {user.email}</p>
                </div>
            </div>
        </>
    )
}