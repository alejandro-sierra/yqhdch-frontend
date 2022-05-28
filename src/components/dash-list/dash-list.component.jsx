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

    useEffect(() => {
        console.log(location.state.recipes);
        if (!location.state) {
            navegate('/')
        }
    })

    const handleBlock = e => {
        swal({
            title: "Click...",
            text: `${e.target.offsetParent.offsetParent}`,
            icon: "info"
        })
    }


    const handleDetail = e => {
        console.log(e.target.offsetParent)
        swal({
            title: "Click...",
            text: `${e.target.id}`,
            icon: "info"
        })
        if (e.target.className === "block-dash") {
        }
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
                            <div className="block-icon-dash">
                                <Image src={blockImg} className="icon-dash" onClick={e => handleBlock(e)} />
                                <Image src={favoriteImg} className="icon-dash" />
                                <Image src={deleteImg} className="icon-dash" />
                            </div>
                            <Image id={recipe.id} src={recipe.url_image} className="image-dash" />
                            <p id={recipe.id}>{recipe.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
