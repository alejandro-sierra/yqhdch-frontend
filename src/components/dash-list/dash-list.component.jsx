import { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import favoriteImg from '../../assets/img/favorite.png'
import blockImg from '../../assets/img/block.png'
import deleteImg from '../../assets/img/delete.png'
import './dash-list.styles.css'
import swal from 'sweetalert'

export const DashList = () => {

    const location = useLocation()
    const navegate = useNavigate()
    const recipes = location.state.recipes

    /*
    const dashes = document.querySelectorAll(".block-dash")

    dashes[0].addEventListener("click", function(e){

    })
    
    console.log(dashes)
    */


    useEffect(() => {
        console.log(location.state.recipes);
        if (!location.state) {
            navegate('/')
        }
    })

    const handleDetail = id =>{
        swal({
            title: "Click...",
            text: `${id}`,
            icon: "info"
        })
    }


    return (
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <div className="dash-box">
                {recipes.map(recipe => {
                    return(
                        <div className='block-dash' id={recipe.id}>
                            <div className="block-icon-dash">
                                <Image src={blockImg} className="icon-dash"/>
                                <Image src={favoriteImg} className="icon-dash"/>
                                <Image src={deleteImg} className="icon-dash"/>
                            </div>
                            <Image src={recipe.url_image} className="image-dash"/>
                            <p>{recipe.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
