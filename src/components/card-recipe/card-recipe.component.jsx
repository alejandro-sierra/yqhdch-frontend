import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { AuthToken } from '../../Constants';

export const CardRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        // axios.get('http://yquehagodecomerhoy.xyz:8000/api/recipes')
        axios.get('http://localhost:8000/api/recipes',
             AuthToken)
            .then(response => setRecipes(response.data))
    }, [])

    console.log(recipes);

    return (
        <>
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            {recipes.map(recipe => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={recipe.url_image} />
                        <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Button id={recipe.id} variant="primary">Leer más</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </>
    );
}