import Helmet from 'react-helmet';
import { RegisterForm } from '../register-form/register-form.component';
import './register-page.styles.css'

export const RegisterPage = () => {

    return (
        <div className='login-page'>
            <Helmet>
                <title>Registro | YQHDCH</title>
            </Helmet>
            <RegisterForm/>
        </div>
    );
}