import axios from "axios"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import Helmet from "react-helmet"
import { useParams } from "react-router-dom"
import { apiRouteBase } from "../../Constants"
import './dish-details.styles.css'

export const DishDetails = () => {

    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + `/api/recipes/${id}`)
            .then(response => {
                setRecipe(response.data)
                setIngredients(response.data.ingredients)
                })
            })()
        }, [])
        

    return (
        <div className="background-details container-fluid">
            <Helmet>
                <title>Detalle | YQHDCH</title>
            </Helmet>
            <div className="details-box">
                <div className='block-details'>
                    <div className="header-details">
                        <div className="header-text-details">
                            <Image src={recipe.url_image} className="image-dish" />
                            <p>{recipe.title}</p>
                        </div>
                        <div className="header-content-details">
                            <p>Dificultad: {recipe.difficulty}</p>
                            <p>Tiempo de preparación: {recipe.preparation_time}</p>
                        </div>
                    </div>
                    <div className="details-box">
                        <h5>Ingredientes</h5>
                        <ul>
                            {ingredients.map(ingredient => {
                                return <li key={ingredient}>{ingredient}</li>
                            })}
                        </ul>
                    </div>
                    <div className="details-box">
                        <h5>Preparación</h5>
                        <p>{recipe.preparation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}