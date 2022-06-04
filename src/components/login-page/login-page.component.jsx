import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import loginImage from '../../assets/img/login-image.png'
import Helmet from "react-helmet";
import { apiRouteBase } from "../../Constants";
import './login-page.styles.css'

export const LoginPage = () => {
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
                    baseURL: apiRouteBase,
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
                        text: "El email o la contraseña son incorrectos, inténtalo de nuevo.",
                        icon: "warning"
                    })
                }


            })()
        }
    }

    return (
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Iniciar sesión | YQHDCH</title>
            </Helmet>
            <Form className="login-form" onSubmit={formSubmit}>
                <Image className="login-image" src={loginImage} />
                    <Form.Control autoFocus type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <Form.Control type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
                <Link to={'/register'}>Registrarse</Link>
            </Form>
        </div>
    );
}