import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiRouteBase } from '../../Constants';
import axios from 'axios';
import swal from 'sweetalert';
import Helmet from 'react-helmet';
import './main-page.styles.css'

export const MainPage = () => {
    const [times, setTimes] = useState([])
    const [diets, setDiets] = useState([])
    const [difficulties, setDifficulties] = useState([])

    const [number, setNumber] = useState('1')
    const [time, setTime] = useState('30')
    const [difficulty, setDifficulty] = useState('facil')
    const [diet, setDiet] = useState('vegetariano')

    const [recipes, setRecipes] = useState([])

    const navegate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        (async () => {
            await axios.get(apiRouteBase + '/api/recipes/times')
                .then(response => setTimes(response.data))

            await axios.get(apiRouteBase + '/api/recipes/diets')
                .then(response => setDiets(response.data))

            await axios.get(apiRouteBase + '/api/recipes/difficulties')
                .then(response => setDifficulties(response.data))
        })()
    }, [])

    const submitPedir = e => {
        e.preventDefault()
        if (number < 1 || number > 7) {
            swal({
                title: "Recuerda!",
                text: 'El rango de cuantas recetas quieres esta entre una y siete recetas.',
                icon: "warning"
            })
        } else {
            (async () => {
                await axios.get(apiRouteBase + `/api/recipe/${number}/${time}/${difficulty}/${diet}`)
                    .then(response => {
                        if (response.data.error) {
                            swal({
                                title: "Vaya...!",
                                text: `${response.data.error}`,
                                icon: "error"
                            })
                        } else {
                            navegate('/dash_list', {
                                state: {
                                    recipes: response.data
                                }
                            })
                        }
                    })
            })()
        }
    }

    return (
        <div className='background-generic'>
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <div className='main-page container-fluid mx-2'>
                <Form>
                    <Form.Label htmlFor="recetas">¿Cuántas recetas quieres?</Form.Label>
                    <Form.Group className="mb-3" controlId="recetas">
                        <Form.Control type="number" min={1} max={7} defaultValue={number} onChange={e => setNumber(e.target.value)} />
                        <Form.Text muted>Elige entre una y siete recetas.</Form.Text>
                    </Form.Group>

                    <Form.Label htmlFor="time">Tiempo de preparación</Form.Label>
                    <Form.Group className="mb-3" controlId="time">
                        <Form.Select onChange={e => setTime(e.target.value)} defaultValue={time}>
                            <option hidden value={time}>{time}</option>
                            {times.map(time => {
                                return <option key={time}>{time}</option>
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Label htmlFor="dificultad">Dificultad</Form.Label>
                    <Form.Group className="mb-3" controlId="dificultad">
                        <Form.Select onChange={e => setDifficulty(e.target.value)} defaultValue={difficulty}>
                            <option hidden value={difficulty}>{difficulty}</option>
                            {difficulties.map(difficulty => {
                                return <option key={difficulty}>{difficulty}</option>
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Label htmlFor="dieta">Dieta</Form.Label>
                    <Form.Group className="mb-3" controlId="dieta">
                        <Form.Select onChange={e => setDiet(e.target.value)} defaultValue={diet}>
                            <option hidden value={diet}>{diet}</option>
                            {diets.map(diet => {
                                return <option key={diet}>{diet}</option>
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={submitPedir}>
                        Pedir
                    </Button>
                </Form>
            </div>
        </div>
    );
}