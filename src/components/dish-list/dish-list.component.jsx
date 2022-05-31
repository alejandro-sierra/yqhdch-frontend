import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import favoriteImg from '../../assets/img/favorite.png'
import blockImg from '../../assets/img/block.png'
import deleteImg from '../../assets/img/delete.png'
import swal from 'sweetalert'
import './dish-list.styles.css'

export const DishList = () => {

    const location = useLocation()
    const navegate = useNavigate()

    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        if (!location.state) {
            navegate('/')
        }else{
            setRecipes(location.state.recipes)
        }
    }, [])

    const handleDetail = e => {
        let recipeSelect 
        recipes.map(recipe =>{
            if (recipe.id == e.target.id) {
                recipeSelect = recipe
            }
        })
        navegate(`/details/${e.target.id}`)
    }


    return (
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <div className="dish-box">
                {recipes.map(recipe => {
                    return (
                        <div className='block-dish' id={recipe.id} onClick={e => handleDetail(e)}>
                            {/* { user ? 
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
        </div>
    )
}
