import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import { App } from './pages/HomePage'
import { RecipesPage } from './pages/RecipesPage/index'
import { BlogPage } from './pages/BlogPage/index'
import { NutritionPage } from './pages/NutritionPage/index'
import { PartnersPage } from './pages/PartnersPage/index'
import { RegisterPage } from './pages/RegisterPage/index'
import { ModalSuccess } from './pages/ModalSuccess/index'
import { RecipesAdmin } from './pages/admin/RecipesAdmin/index'
import { ScrollToTop } from './pages/ScrollToTop';
import { PartnersAdmin } from './pages/admin/PartnersAdmin';
import { LoginAdmPage } from './pages/admin/LoginAdmPage';
import { RegisterPartnersAdmin } from './pages/admin/RegisterPartnersAdmin';
import { RegisterRecipesAdmin } from './pages/admin/RegisterRecipesAdmin';

function ProtectedRoutes({ redirectTo }) {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export function RoutesGoVegan() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="receitas" element={<RecipesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="nutricao" element={<NutritionPage />} />
          <Route path="parceiros" element={<PartnersPage />} />
          <Route path="cadastro" element={<RegisterPage />} />
          <Route path="modal-success" element={<ModalSuccess />} />
          <Route path="cadastro" element={<RegisterPage />} />
          <Route path="login" element={<LoginAdmPage />} />
          <Route element={<ProtectedRoutes redirectTo='/' />}>
            <Route path="admin/receitas" element={<RecipesAdmin />} />
            <Route path="admin/parceiros" element={<PartnersAdmin />} />
            <Route path="admin/parceiros/cadastro" element={<RegisterPartnersAdmin />} />
            <Route path="admin/receitas/cadastro" element={<RegisterRecipesAdmin />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}