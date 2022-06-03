import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import Helmet from "react-helmet"
import { useNavigate } from "react-router-dom"
import { apiRouteBase, AuthToken } from "../../../Constants"
import blockImg from '../../../assets/img/block.png'
import './profile-block.styles.css'
import swal from "sweetalert"

export const ProfileBlock = () => {

    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [user, setUser] = useState([])

    const navegate = useNavigate()

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + '/api/users/status/block', AuthToken)
                .then(response => {
                    setRecipes(response.data)
                })

            await axios.get(apiRouteBase + '/api/me', AuthToken)
                .then(response => setUser(response.data))
        })()
    }, [])

    const handleDetail = e => {
        if (e.target.id === 'block') {
            (async () => {
                const token = localStorage.getItem('my-token')

                const http = axios.create({
                    baseURL: apiRouteBase,
                    headers: {
                        'X-Request-With': 'XMLHttpRequest',
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true,
                })
                const csrf = await http.get('/sanctum/csrf-cookie')

                try {
                    await http.post('/api/users/status', {
                        recipe_id: e.target.offsetParent.id,
                        status: "bloqueados"
                    })
                    await axios.get(apiRouteBase + '/api/users/status/block', AuthToken)
                        .then(response => {
                            setRecipes(response.data)
                        })
                } catch (e) {
                    swal({
                        title: "Vaya...",
                        text: "Ha habido un error. Por favor, inténtalo de nuevo más tarde.",
                        icon: "warning"
                    })
                }
            })()
        } else {
            navegate(`/recipe/details/${e.target.id}`)
        }
    }


    return (
        <>
            <Helmet>
                <title>Bloqueadas | YQHDCH</title>
            </Helmet>
            <div className="block-box">
                {recipes.map(recipe => {
                    return (
                        <div className='block-dish' id={recipe.id} key={recipe.id} onClick={e => handleDetail(e)}>
                            <div id={recipe.id} className="block-icon-dish">
                                <Image src={blockImg} id='block' className="icon-dish" />
                            </div>
                            <Image id={recipe.id} src={recipe.url_image} className="image-dish" />
                            <p id={recipe.id}>{recipe.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}