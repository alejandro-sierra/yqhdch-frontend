import { Button, Form } from 'react-bootstrap';
import './main-form.styles.css'

export const MainForm = () => {

    return (
        <div className='main-form container-fluid mx-4'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" min={1} max={7} placeholder="¿Cuántas recetas quieres?" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    <Form.Group className="mb-3">
                        <Form.Label>Disabled select menu</Form.Label>
                        <Form.Select>
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    );
}