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
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
)
