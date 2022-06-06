import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { apiRouteBase, AuthToken } from '../../Constants';
import './create-recipe.styles.css'

export const CreateRecipe = () => {

    const [titulo, setTitulo] = useState("")
    const [preparacion, setPreparacion] = useState("")
    const [dificultad, setDificultad] = useState("fácil")
    const [tiempo, setTiempo] = useState("")
    const [dieta, setDieta] = useState("vegetariana")
    const [imagen_url, setImageUrl] = useState("")


    const navegate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                await axios.get(apiRouteBase + '/api/me', AuthToken)
                .then(response => setUser(response.data))
            } catch (e) {
                navegate('/')
            }
        })()
    }, [])


    const formSubmit = e => {
        e.preventDefault()
        if (!(titulo && preparacion && dificultad && tiempo && dieta && imagen_url)) {
            swal({
                title: "Cuidado...",
                text: "Todos los campos son obligatorios.",
                icon: "info"
            })
        } else {
            (async () => {
                const http = axios.create({
                    baseURL: apiRouteBase,
                    headers: {
                        'X-Request-With': 'XMLHttpRequest',
                    },
                    withCredentials: true,
                })

                const csrf = await http.get('/sanctum/csrf-cookie')

                try {
                    await http.post('/api/recipes/create', {
                        title: titulo,
                        preparation: preparacion,
                        difficulty: dificultad,
                        preparation_time: tiempo,
                        diet: dieta,
                        url_image: imagen_url
                    }).then(response => {
                        swal({
                            title: "Enviado...",
                            text: "Tu receta ha sido creada con éxito.",
                            icon: "success"
                        })
                    })
                } catch (e) {
                    swal({
                        title: "Vaya...",
                        text: "Ha habido un error al intentar crear tu receta. Por favor, inténtalo de nuevo más tarde.",
                        icon: "warning"
                    })
                }
            })()
        }
    }

    const handleDelete = e => {
        e.preventDefault()
        setTitulo("")
        setPreparacion("")
        setDificultad("fácil")
        setTiempo("")
        setDieta("vegetariana")
        setImageUrl("")
    }

    return (
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Crear Receta | YQHDCH</title>
            </Helmet>
            <Form className="login-form">
                <Form.Control type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
                <Form.Control className='textarea-create' as="textarea" placeholder="Preparación" value={preparacion} onChange={e => setPreparacion(e.target.value)} />
                <Form.Select aria-label="Default select example" value={dificultad} onChange={e => setDificultad(e.target.value)}>
                    <option value="fácil">Fácil</option>
                    <option value="media">Media</option>
                    <option value="difícil">Difícil</option>
                </Form.Select>
                <Form.Control type="number" placeholder="Tiempo de preparación (en minutos)" value={tiempo} onChange={e => setTiempo(e.target.value)} />
                <Form.Select aria-label="Default select example" value={dieta} onChange={e => setDieta(e.target.value)}>
                    <option value="vegetariana">Vegetariana</option>
                    <option value="estándar">Estándar</option>
                    <option value="postre">Postres</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Url de la imágen" value={imagen_url} onChange={e => setImageUrl(e.target.value)} />
                <div className='btn-create-recipe'>
                    <Button variant="primary" type="submit" onClick={handleDelete}> Borrar </Button>
                    <Button variant="primary" type="submit" onClick={formSubmit}> Crear </Button>
                </div>
            </Form>
        </div>
    );
}