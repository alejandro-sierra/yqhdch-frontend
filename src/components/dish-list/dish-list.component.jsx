import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import favoriteImg from '../../assets/img/favorite.png'
import blockImg from '../../assets/img/block.png'
import deleteImg from '../../assets/img/delete.png'
import swal from 'sweetalert'
import './dish-list.styles.css'
import axios from 'axios'
import { apiRouteBase, AuthToken } from '../../Constants'

export const DishList = () => {

    const location = useLocation()
    const navegate = useNavigate()

    const [recipes, setRecipes] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!location.state) {
            navegate('/')
        } else {
            setRecipes(location.state.recipes)
        }
    }, [])

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
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <div className="details-box">
                {recipes.map(recipe => {
                    return (
                        <div className='block-dish' id={recipe.id} key={recipe.id} onClick={e => handleDetail(e)}>
                            { user ?
                                <div className="block-icon-dish">
                                    <Image src={blockImg} className="icon-dish" />
                                    <Image src={favoriteImg} className="icon-dish" />
                                </div>
                                : <></>}
                            <Image id={recipe.id} src={recipe.url_image} className="image-dish" />
                            <p id={recipe.id}>{recipe.title}</p>
                        </div>
                    )
                })}
                {/* <div className='details-box'>
                    <h6>Ingredientes necesarios</h6>
                    <ul>
                        {recipes.map(recipe => {
                            return (
                                <>
                                    <li> {recipe.title} </li>
                                    <ul>
                                        {recipe.ingredients.map(ingredient => {
                                            return <li> {ingredient} </li>
                                        })}
                                    </ul>
                                </>
                            )
                        })}
                    </ul>
                </div> */}
            </div>
        </div>
    )
}
