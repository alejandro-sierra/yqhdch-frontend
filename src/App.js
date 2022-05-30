import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageError } from './components/errors/page-error.component';
import { NavBar } from './components/nav-bar/nav-bar/nav-bar.component';
import { DashList } from './components/dash-list/dash-list.component';
import { MainPage } from './components/main-page/main-page.component';
import './App.css';
import { LoginPage } from './components/login-page/login-page.component';
import { RegisterPage } from './components/register-page/register-page.component';
import { CreateRecipe } from './components/create-recipe/create-recipe.component';
import axios from 'axios';
import { apiRouteBase, AuthToken } from './Constants';

// TODO: Revisar como hacer rutas protegidas
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null)
    useEffect(() => {
        axios.get(apiRouteBase + '/api/me', AuthToken)
        .then(response => setUser(response.data))
    }, [])
}

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/create_recipe' element={<CreateRecipe/>}/>
        <Route path='/dash_list' element={<DashList/>}/>
        <Route path='/*' element={<PageError/>}/>
      </Routes>
    </div>
  );
}

export default App;
