import Helmet from 'react-helmet';
import { LoginForm } from '../login-form/login-from.component';
import './login-page.styles.css'

export const LoginPage = () => {

    return (
        <div className='login-page'>
            <Helmet>
                <title>Iniciar sesión | YQHDCH</title>
            </Helmet>
            <LoginForm/>
        </div>
    );
}