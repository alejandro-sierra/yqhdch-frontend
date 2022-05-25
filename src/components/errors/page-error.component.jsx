import { Alert, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import error_404 from "./404-error.png"
import './page-error.styles.css'

export const PageError = () => {

    return (
        <div className='d-flex justify-content-center m-4'>
            <Alert variant="danger" className='text-center'>
                <Alert.Heading>¡Vaya...! Esta página no existe!</Alert.Heading>
                <p>
                    Vuelve a la pantalla <Link className="text-decoration-none" to='/'>principal</Link>.
                </p>
                    <Image className="img-error" src={error_404}></Image>
            </Alert>
        </div>
    );
}