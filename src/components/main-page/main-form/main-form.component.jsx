import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './main-form.styles.css'

export const MainForm = () => {
    const [times, setTimes] = useState([])
    const [diets, setDiets] = useState([])
    const [difficulties, setDifficulties] = useState([])

    useEffect(() => {
        (async () => {
            // await axios.get('http://yquehagodecomerhoy.xyz:8000/api/recipes/times',
            await axios.get('http://localhost:8000/api/recipes/times')
                .then(response => setTimes(response.data))
            
            // await axios.get('http://yquehagodecomerhoy.xyz:8000/api/recipes/diets',
            await axios.get('http://localhost:8000/api/recipes/diets')
                .then(response => setDiets(response.data))
            
            // await axios.get('http://yquehagodecomerhoy.xyz:8000/api/recipes/difficulties',
            await axios.get('http://localhost:8000/api/recipes/difficulties')
                .then(response => setDifficulties(response.data))
        })()
    }, [])

    return (
        <div className='main-form container-fluid mx-4'>
            <Form>
                <Form.Label htmlFor="recetas">¿Cuántas recetas quieres?</Form.Label>
                <Form.Group className="mb-3" controlId="recetas">
                    <Form.Control type="number" min={1} max={7} defaultValue={1} />
                </Form.Group>

                <Form.Label htmlFor="time">Tiempo de preparación</Form.Label>
                <Form.Group className="mb-3" controlId="time">
                    <Form.Select>
                        {times.map(time => {
                            return <option key={time}>{time}</option>
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Label htmlFor="dificultad">Dificultad</Form.Label>
                <Form.Group className="mb-3" controlId="dificultad">
                    <Form.Select>
                        {difficulties.map(difficulty => {
                            return <option key={difficulty}>{difficulty}</option>
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Label htmlFor="dieta">Dieta</Form.Label>
                <Form.Group className="mb-3" controlId="dieta">
                    <Form.Select>
                        {diets.map(diet => {
                            return <option key={diet}>{diet}</option>
                        })}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Pedir
                </Button>
            </Form>
        </div>
    );
}