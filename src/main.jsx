import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './App'
import { RecipesPage } from './Routes/RecipesPage/index'
import { NutritionPage } from './Routes/NutritionPage/index'
import { PartnersPage } from './Routes/PartnersPage/index'
import { RegisterPage } from './Routes/RegisterPage/index'
import { RecipeComplete } from './Routes/RecipeComplete/index';
import { ModalContact } from './Routes/ModalContact/index'
import { ModalSuccess } from './Routes/ModalSuccess/index'
import { RecipesAdmin } from './Routes/admin/RecipesAdmin/index'
import { ScrollToTop } from './Routes/ScrollToTop';
import { PartnersAdmin } from './Routes/admin/PartnersAdmin';
import { LoginAdmPage } from './Routes/admin/LoginAdmPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="receitas" element={<RecipesPage />} />
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
  </React.StrictMode>
)
