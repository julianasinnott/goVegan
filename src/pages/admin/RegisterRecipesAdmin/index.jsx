import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import "./style.css"

export function RegisterRecipesAdmin() {
    return(
      <AdminTemplate colorRecipes='--tertiary'>
        <main className="main_RegisterRecipes">
        <div className="content_RegisterRecipes">
          <h1 className="h1_RegisterRecipes">Cadastrar nova receita</h1>
          <form className="form_RegisterRecipes">
          <input className="input_RegisterRecipes" type="text" placeholder="Título" />
          <input className="input_RegisterRecipes" type="text" placeholder="Subtítulo" />
          <textarea className="text-area_RegisterRecipes" placeholder="Ingredientes"></textarea>
          <textarea className="text-area_RegisterRecipes" placeholder="Modo de fazer"></textarea>
          <select className="input_RegisterRecipes">
            <option value="Tipo" selected="selected" disabled>Tipo</option>
            <option value="Doce">DOCES</option>
            <option value="Salgado">SALGADAS</option>
          </select>
          <input className="input_RegisterRecipes" type="text" placeholder="URL da Imagem" />
          <button className="btn_RegisterRecipes" type="submit">ENVIAR</button>
          </form>
        </div>
      </main>
      </AdminTemplate>
    )
  }