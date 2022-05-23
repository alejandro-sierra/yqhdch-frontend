import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import Helmet from 'react-helmet';

export const CardRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes')
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