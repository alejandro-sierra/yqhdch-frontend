import { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import favoriteImg from '../../assets/img/favorite.png'
import blockImg from '../../assets/img/block.png'
import deleteImg from '../../assets/img/delete.png'
import './dash-list.styles.css'
import swal from 'sweetalert'

export const DashList = ({ user }) => {

    const location = useLocation()
    const navegate = useNavigate()
    const recipes = location.state.recipes
    
    useEffect(() => {
        // TODO: si entra en la ruta y no hay location.state le lleve a '/'
    })

    const handleDetail = e => {
        let recipeSelect 
        recipes.map(recipe =>{
            // recipeSelect = recipe.id == e.target.id ? recipe : {}
            if (recipe.id == e.target.id) {
                recipeSelect = recipe
            }
        })
        // TODO: navegate('/details)
        console.log(recipeSelect)
    }


    return (
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <div className="dash-box">
                {recipes.map(recipe => {
                    return (
                        <div className='block-dash' id={recipe.id} onClick={e => handleDetail(e)}>
                            {/* { user ? 
                            <div className="block-icon-dash">
                                <Image src={blockImg} className="icon-dash" />
                                <Image src={favoriteImg} className="icon-dash" />
                                <Image src={deleteImg} className="icon-dash" />
                            </div> 
                            : <></>} */}
                            <Image id={recipe.id} src={recipe.url_image} className="image-dash" />
                            <p id={recipe.id}>{recipe.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
