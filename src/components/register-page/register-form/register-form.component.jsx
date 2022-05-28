import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { apiRouteBase } from "../../../Constants";
import welcomeImage from '../../../assets/img/welcome.png'
import './register-form.styles.css'

export const RegisterForm = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const navegate = useNavigate()

    const formSubmit = e => {
        e.preventDefault()

        if (!(nombre && email && password && passwordConfirmation)) {
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
                    const register = await http.post('/api/register', {
                        name: nombre,
                        email: email,
                        password: password,
                        password_confirmation: passwordConfirmation
                    })
                    navegate('/')
                    window.location.reload()
                    localStorage.setItem('my-token', register.data.token);
                } catch (e) {
                    swal({
                        title: "Vaya...",
                        text: "El email ya está usado o las contraseñas no coinciden, compruébalo.",
                        icon: "warning"
                    })
                }


            })()
        }
    }

    return (
        <Form className="login-form" onSubmit={formSubmit}>
            <Image className="login-image" src={welcomeImage} />
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Confirmar contraseña" onChange={e => setPasswordConfirmation(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
    );
}