import Helmet from 'react-helmet'
import { useLocation } from 'react-router-dom'
import './dash-list.styles.css'

export const DashList = () => {

    const location = useLocation()

    return(
        <div className="dash-list-page">
            <Helmet>
                <title>Inicio | YQHDCH</title>
            </Helmet>
            <p>{location.state.number}</p>
        </div>
    )
}
