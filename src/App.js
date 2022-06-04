import { Route, Routes } from 'react-router-dom';
import { PageError } from './components/errors/page-error.component';
import { NavBar } from './components/nav-bar/nav-bar/nav-bar.component';
import { MainPage } from './components/main-page/main-page.component';
import { LoginPage } from './components/login-page/login-page.component';
import { RegisterPage } from './components/register-page/register-page.component';
import { CreateRecipe } from './components/create-recipe/create-recipe.component';
import { DishList } from './components/dish-list/dish-list.component';
import { DishDetails } from './components/dish-details/dish-details.components';
import { Admin } from './components/admin/admin-page/admin-page.component';
import { ProfilePage } from './components/profile/profile-page/profile-page.component';
import { ProfileUser } from './components/profile/profile-user/profile-user.component';
import { ProfileFavorite } from './components/profile/profile-favorite/profile-favorite.component';
import { ProfileBlock } from './components/profile/profile-block/profile-block.component';
import './App.css';
import { RandomPage } from './components/random/random-recipe.component';

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
        <Route path="/admin/*" element={<Admin />}>
        </Route>
        <Route path="/profile/*" element={<ProfilePage /> }>
          <Route index element={<ProfileUser />} />
          <Route path="favorites" element={<ProfileFavorite />} />
          <Route path="block" element={<ProfileBlock />} />
        </Route>
        <Route path="/random" element={<RandomPage /> } />
        <Route path='/*' element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
