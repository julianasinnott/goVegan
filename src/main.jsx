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
<<<<<<< HEAD
import { LoginAdmPage } from './Routes/LoginAdmPage/index'
import { PainelAdmPage } from './Routes/PainelAdmPage/index'
import { PartnersAdmPage } from './Routes/PartnersAdmPage/index'
import { RecipesAdmPage } from './Routes/RecipesAdmPage/index'
import { RegisterPartnersAdmPage } from './Routes/RegisterPartnersAdmPage/index'
import { RegisterRecipesAdmPage } from './Routes/RegisterRecipesAdmPage/index'
import { ModalContact } from './Routes/ModalContact/index'
import { ModalSuccess } from './Routes/ModalSuccess/index'
=======
import { RecipesAdmin } from './Routes/admin/RecipesAdmin/index'
>>>>>>> dev
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
<<<<<<< HEAD
          <Route path="cadastro" element={<RegisterPage />} />
          <Route path="login-adm" element={<LoginAdmPage />} />
          <Route path="painel-adm" element={<PainelAdmPage />} />
          <Route path="partners-adm" element={<PartnersAdmPage />} />
          <Route path="recipes-adm" element={<RecipesAdmPage />} />
          <Route path="register-partners-adm" element={<RegisterPartnersAdmPage />} />
          <Route path="register-recipes-adm" element={<RegisterRecipesAdmPage />} />
          <Route path="modal-contact" element={<ModalContact />} />
          <Route path="modal-success" element={<ModalSuccess />} />
=======
          <Route path="cadastro" element={<RegisterPage />} />      
          <Route path="login" element={<LoginAdmPage />} />           
          <Route path="admin/receitas" element={<RecipesAdmin />} />        
          <Route path="admin/parceiros" element={<PartnersAdmin />} />        
>>>>>>> dev
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
)
