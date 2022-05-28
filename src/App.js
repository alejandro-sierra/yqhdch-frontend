import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CardRecipes } from './components/card-recipe/card-recipe.component';
import { PageError } from './components/errors/page-error.component';
import { NavBar } from './components/nav-bar/nav-bar/nav-bar.component';
import { RegisterPage } from './components/register-page/register-page/register-page.component';
import { DashList } from './components/dash-list/dash-list.component';
import { MainPage } from './components/main-page/main-page.component';
import './App.css';
import { LoginPage } from './components/login-page/login-page.component';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useState()
}

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/cards' element={<CardRecipes/>}/>
        <Route path='/dash_list' element={<DashList/>}/>
        <Route path='/*' element={<PageError/>}/>
      </Routes>
    </div>
  );
}

export default App;
