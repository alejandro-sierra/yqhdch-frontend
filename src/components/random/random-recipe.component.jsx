import { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import favoriteImg from '../../assets/img/favorite.png'
import blockImg from '../../assets/img/block.png'
import swal from 'sweetalert'
import axios from 'axios'
import { apiRouteBase, AuthToken } from '../../Constants'
import './random-recipe.styles.css'

export const RandomPage = () => {

    const navegate = useNavigate()

    const [recipes, setRecipes] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + '/api/random')
                .then(response => setRecipes(response.data))

            await axios.get(apiRouteBase + '/api/me', AuthToken)
                .then(response => setUser(response.data))

        })()
    }, [])


    const submitPedir = () => {
        (async () => {
            await axios.get(apiRouteBase + '/api/random')
                .then(response => setRecipes(response.data))
        })()
    }


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
                    }).then(response => {
                        swal({
                            title: "Bloqueos...",
                            text: `${response.data.message}`,
                            icon: "success",
                            buttons: false,
                            timer: 2500
                        })
                    })
                } catch (e) {
                    swal({
                        title: "Vaya...",
                        text: "Ha habido un error. Por favor, inténtalo de nuevo más tarde.",
                        icon: "warning"
                    })
                }
            })()
        } else if (e.target.id === 'favorites') {
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
                        status: "favoritas"
                    }).then(response => {
                        swal({
                            title: "Favoritas...",
                            text: `${response.data.message}`,
                            icon: "success",
                            buttons: false,
                            timer: 2500
                        })
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
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Random | YQHDCH</title>
            </Helmet>
            <div className="details-box">
                {recipes.map(recipe => {
                    return (
                        <div className='block-dish' id={recipe.id} key={recipe.id} onClick={e => handleDetail(e)}>
                            {user ?
                                <div id={recipe.id} className="block-icon-dish">
                                    <Image src={blockImg} id='block' className="icon-dish" />
                                    <Image src={favoriteImg} id='favorites' className="icon-dish" />
                                </div>
                                : <></>}
                            <Image id={recipe.id} src={recipe.url_image} className="image-dish" />
                            <p id={recipe.id}>{recipe.title}</p>
                        </div>
                    )
                })}
                <Button className='btn-random' variant="primary" type="submit" onClick={submitPedir}>
                    Random
                </Button>
            </div>
        </div>
    )
}
