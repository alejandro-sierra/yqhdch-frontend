import Helmet from 'react-helmet';
import { MainForm } from '../main-form/main-form.component';
import './main-page.styles.css'

export const MainPage = () => {

    return (
        <div className='main-page'>
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <MainForm/>
        </div>
    );
}