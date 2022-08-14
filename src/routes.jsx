import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './pages/HomePage'
import { RecipesPage } from './pages/RecipesPage/index'
import { BlogPage } from './pages/BlogPage/index'
import { NutritionPage } from './pages/NutritionPage/index'
import { PartnersPage } from './pages/PartnersPage/index'
import { RegisterPage } from './pages/RegisterPage/index'
import { RecipeComplete } from './pages/RecipeComplete/index';
import { ModalContact } from './pages/ModalContact/index'
import { ModalSuccess } from './pages/ModalSuccess/index'
import { RecipesAdmin } from './pages/admin/RecipesAdmin/index'
import { ScrollToTop } from './pages/ScrollToTop';
import { PartnersAdmin } from './pages/admin/PartnersAdmin';
import { LoginAdmPage } from './pages/admin/LoginAdmPage';


export function RoutesGoVegan() {
  return(
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="receitas" element={<RecipesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="nutricao" element={<NutritionPage />} />
          <Route path="parceiros" element={<PartnersPage />} />
          <Route path="cadastro" element={<RegisterPage />} />
          <Route path="recipe-complete" element={<RecipeComplete />} />
          <Route path="modal-contact" element={<ModalContact />} />
          <Route path="modal-success" element={<ModalSuccess />} />
          <Route path="cadastro" element={<RegisterPage />} />
          <Route path="login" element={<LoginAdmPage />} />
          <Route path="admin/receitas" element={<RecipesAdmin />} />
          <Route path="admin/parceiros" element={<PartnersAdmin />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}