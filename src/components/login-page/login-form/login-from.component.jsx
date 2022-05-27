import { Button, Form, Image } from "react-bootstrap";
import loginImage from '../../../assets/img/login-image.png'
import swal from "sweetalert";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login-form.styles.css'
import { NavBar } from "../../nav-bar/nav-bar/nav-bar.component";
import { render } from "react-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navegate = useNavigate()

    const formSubmit = e => {
        e.preventDefault()

        if (!(email && password)) {
            swal({
                title: "Cuidado...",
                text: "Todos los campos son obligatorios.",
                icon: "info"
            })
        } else {
            (async () => {
                const http = axios.create({
                    // baseURL: 'http://yquehagodecomerhoy.xyz:8000',
                    baseURL: 'http://localhost:8000',
                    headers: {
                        'X-Request-With': 'XMLHttpRequest',
                    },
                    withCredentials: true,
                })

                const csrf = await http.get('/sanctum/csrf-cookie')

                try {
                    const login = await http.post('/api/login', {
                        email: email,
                        password: password
                    })
                    navegate('/')
                    window.location.reload()
                    localStorage.setItem('my-token', login.data.token);
                } catch (e) {
                    swal({
                        title: "Vaya...",
                        text: "El email o la contraseña son incorrectos, intentalo de nuevo.",
                        icon: "warning"
                    })
                }


            })()
        }
    }

    return (
        <Form className="login-form" onSubmit={formSubmit}>
            <Image className="login-image" src={loginImage} />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Iniciar Sesión
            </Button>
        </Form>
    );
}