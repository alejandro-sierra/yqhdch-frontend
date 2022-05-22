import { Button, Form, Image } from "react-bootstrap";
import './login-form.styles.css'
import loginImage from '../../../assets/img/login-image.png'
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";

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
            fetch('http://localhost:8000/api/login', {
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            console.log(email + " => " + password)

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