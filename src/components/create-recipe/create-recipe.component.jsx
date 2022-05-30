import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Helmet from 'react-helmet';

export const CreateRecipe = () => {


    const formSubmit = e => {
        e.preventDefault()
        alert('hola')
    }

    return (
        <div className="background-generic container-fluid">
            <Helmet>
                <title>Crear Receta | YQHDCH</title>
            </Helmet>
            <Form className="login-form" onSubmit={formSubmit}>
                <Form.Control type="text" placeholder="Título" />
                <Form.Control as="textarea" placeholder="Preparación" />
                <Form.Select aria-label="Default select example">
                    <option disabled>Elige una dificultad</option>
                    <option value="fácil">Fácil</option>
                    <option value="media">Media</option>
                    <option value="difícil">Difícil</option>
                </Form.Select>
                <Form.Control type="number" placeholder="Tiempo de preparación (en minutos)" />
                <Form.Select aria-label="Default select example">
                    <option disabled>Elige una dieta</option>
                    <option value="estandar">Estandar</option>
                    <option value="vegetariano">Vegetariana</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Url de la imágen" />
                <Button variant="primary" type="submit">
                    Crear
                </Button>
            </Form>
        </div>
    );
}