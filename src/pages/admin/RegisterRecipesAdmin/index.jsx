import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import "./style.css"

export function RegisterRecipesAdmin() {
    return(
      <AdminTemplate>
        <main className="main_RegisterRecipes">
        <div className="content_RegisterRecipes">
          <h1 className="h1_RegisterRecipes">Cadastrar nova receita</h1>
          <form className="form_RegisterRecipes">
          <input className="input_RegisterRecipes" type="text" placeholder="Título" />
          <textarea className="text-area_RegisterRecipes" placeholder="Ingredientes" cols="30" rows="10">Ingredientes</textarea>
          <textarea className="text-area_RegisterRecipes" placeholder="Modo de fazer" cols="30" rows="10">Modo de fazer</textarea>
          <select className="input_RegisterRecipes">
            <option value="Tipo" selected="selected" disabled>Tipo</option>
            <option value="Doce">Doce</option>
            <option value="Salgado">Salgado</option>
          </select>
          <input className="input_RegisterRecipes" type="date" placeholder="Data" />
          <input className="input_RegisterRecipes" type="text" placeholder="Upload Imagem" />
          <button className="btn_RegisterRecipes" type="submit">Enviar</button>
          </form>
        </div>
      </main>
      </AdminTemplate>
    )
  }