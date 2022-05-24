import { Button, Form, Image } from "react-bootstrap";
import loginImage from '../../../assets/img/login-image.png'
import swal from "sweetalert";
import { useEffect, useState } from "react";
import axios from "axios";
import './login-form.styles.css'

export const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const formSubmit = e => {
        e.preventDefault()

        if (!(email && password)) {
            swal({
                title: "Vaya...",
                text: "El email o la contraseña son incorrectos.",
                icon: "info"
            })
        } else {
            const http = axios.create({
                baseURL: 'http://yquehagodecomerhoy.xyz:8000',
                headers: {
                    'X-Request-With': 'XMLHttpRequest',
                },
                withCredentials: true,
            })

            getUser()

            async function getUser() {
                const csrf = await http.get('/sanctum/csrf-cookie')

                const login = await http.post('/api/login', {
                    email: email,
                    password: password
                })

                localStorage.setItem('my-token', login.data.token);
            }
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