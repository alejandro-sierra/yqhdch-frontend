import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/login-page/login-page/login-page.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import { useState } from 'react';
import { MainPage } from './components/main-page/main-page/main-page.component';
import './App.css';
import { CardRecipes } from './components/card-recipe/card-recipe.component';


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
        <Route path='/cards' element={<CardRecipes/>}/>
      </Routes>
    </div>
  );
}

export default App;
