import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './App'
import { BlogPage } from './Routes/BlogPage/index'
import { RecipesPage } from './Routes/RecipesPage/index'
import { NutritionPage } from './Routes/NutritionPage/index'
import { PartnersPage } from './Routes/PartnersPage/index'
import { RegisterPage } from './Routes/RegisterPage/index'
import { LoginAdmPage } from './Routes/LoginAdmPage/index'
import { PainelAdmPage } from './Routes/PainelAdmPage/index'
import { PartnersAdmPage } from './Routes/PartnersAdmPage/index'
import { RecipesAdmPage } from './Routes/RecipesAdmPage/index'
import { RegisterPartnersAdmPage } from './Routes/RegisterPartnersAdmPage/index'
import { RegisterRecipesAdmPage } from './Routes/RegisterRecipesAdmPage/index'
import { ScrollToTop } from './Routes/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="receitas" element={<RecipesPage />} />
          <Route path="nutricao" element={<NutritionPage />} />
          <Route path="parceiros" element={<PartnersPage />} />
          <Route path="cadastro" element={<RegisterPage />} />      
          <Route path="login-adm" element={<LoginAdmPage />} />      
          <Route path="painel-adm" element={<PainelAdmPage />} />      
          <Route path="partners-adm" element={<PartnersAdmPage />} />      
          <Route path="recipes-adm" element={<RecipesAdmPage />} />      
          <Route path="register-partners-adm" element={<RegisterPartnersAdmPage />} />      
          <Route path="register-recipes-adm" element={<RegisterRecipesAdmPage />} />      
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
)
