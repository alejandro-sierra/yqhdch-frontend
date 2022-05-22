import { Route, Routes } from 'react-router-dom';
import { CardRecipes } from './components/card-recipe/card-recipe.component';
import { LoginPage } from './components/login-page/login-page/login-page.component';
import { NavBar } from './components/nav-bar/nav-bar.component';
import './App.css';
import { useState, useAuth } from 'react';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useState()
}

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<CardRecipes/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
