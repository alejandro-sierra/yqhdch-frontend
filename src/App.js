import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageError } from './components/errors/page-error.component';
import { NavBar } from './components/nav-bar/nav-bar/nav-bar.component';
import { MainPage } from './components/main-page/main-page.component';
import './App.css';
import { LoginPage } from './components/login-page/login-page.component';
import { RegisterPage } from './components/register-page/register-page.component';
import { CreateRecipe } from './components/create-recipe/create-recipe.component';
import axios from 'axios';
import { apiRouteBase, AuthToken } from './Constants';
import { DishList } from './components/dish-list/dish-list.component';
import { DishDetails } from './components/dish-details/dish-details.components';

// TODO: Revisar como hacer rutas protegidas

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/create_recipe' element={<CreateRecipe />} />
        <Route path='/dish_list' element={<DishList />} />
        <Route path='recipe/details/:id' element={<DishDetails />} />

        <Route path='/*' element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
