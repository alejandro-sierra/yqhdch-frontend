import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import Helmet from "react-helmet"
import { useNavigate } from "react-router-dom"
import { apiRouteBase, AuthToken } from "../../../Constants"

export const ProfileFavorite = () => {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [user, setUser] = useState([])

    const navegate = useNavigate()

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + `/api/recipe/1/30/fácil/vegetariana`)
                .then(response => {
                    setRecipes(response.data)
                })
                
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
                <title>Favoritas | YQHDCH</title>
            </Helmet>
            <div className="block-box">
                {recipes.map(recipe => {
                    return (
                        <div className='block-dish' id={recipe.id} key={recipe.id} onClick={e => handleDetail(e)}>
                            {/* {user ?
                                    <div className="block-icon-dish">
                                        <Image src={blockImg} className="icon-dish" />
                                        <Image src={favoriteImg} className="icon-dish" />
                                        <Image src={deleteImg} className="icon-dish" />
                                    </div>
                                    : <></>} */}
                            <Image id={recipe.id} src={recipe.url_image} className="image-dish" />
                            <p id={recipe.id}>{recipe.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}