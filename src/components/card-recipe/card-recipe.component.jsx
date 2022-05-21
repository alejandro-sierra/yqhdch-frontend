import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

export const CardRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipe`)
            .then(response => setRecipes(response.data))
    }, [])

    console.log(recipes);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipes.url_image} />
            <Card.Body>
                <Card.Title>{recipes.title}</Card.Title>
                <Button variant="primary">Leer más</Button>
            </Card.Body>
        </Card>
    );
}