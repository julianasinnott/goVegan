import { useState } from "react";
import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { Check } from "phosphor-react";
import api from '../../../services/api'
import "./style.css"
import "./responsive.css"
import { SuccessRegister } from "../../../components/SuccessRegister";

export function RegisterRecipesAdmin() {
  const [loading, setLoading] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
  const [form, setForm] = useState(
    {
      slug: "",
      urlToImage: "",
      title: "",
      subtitle: "",
      ingredients: "",
      phases: "",
      type: ""
    }
  )

  function handleChange(e) {
    setForm({
      ...form,
      "slug": form.title.toLowerCase().replace(/ /g,"-"),
      [e.target.name]: e.target.value,
    });    
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await postRecipes()
    e.target.reset()
  }

  async function postRecipes() {
    setLoading(true)
    try {
      await api.post('/recipes', form)
      setSuccessMessage(true)
    }
    catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false)
      setTimeout(() => {
        setSuccessMessage(false); 
      }, 4000);
    }
  }

  return(
    <AdminTemplate colorRecipes='--tertiary'>
      <main className="main_RegisterRecipes">
        <div className="content_RegisterRecipes">
          <h1 className="h1_RegisterRecipes">Cadastrar nova receita</h1>
          <form
            onSubmit={handleSubmit}
            className="form_RegisterRecipes">
            <input
              name="urlToImage"
              className="input_RegisterRecipes"
              type="text"
              placeholder="URL da Imagem"
              onChange={handleChange}
              required  
            />
            <input
              name="title"
              className="input_RegisterRecipes"
              type="text"
              placeholder="Título"
              onChange={handleChange}
              required
            />
            <input
              name="subtitle"
              className="input_RegisterRecipes"
              type="text"
              placeholder="Subtítulo"
              onChange={handleChange}
              required
            />
            <textarea
              name="ingredients"
              className="text-area_RegisterRecipes"
              placeholder="Ingredientes"
              onChange={handleChange}
              required
            ></textarea>
            <textarea
              name="phases"
              className="text-area_RegisterRecipes"
              placeholder="Modo de fazer"
              onChange={handleChange}
              required
            ></textarea>
            <select
              name="type"
              className="input_RegisterRecipes"
              defaultValue="Tipo"
              onChange={handleChange}
              required
            >
              <option value="Tipo" disabled> Tipo </option>
              <option value="DOCES"> Doce </option>
              <option value="SALGADAS"> Salgada </option>
            </select>
            <button className="btn_RegisterRecipes" type="submit">
              {loading? 'Enviando...' : 'Enviar'}
            </button>
            {
              successMessage && 
              <SuccessRegister
                title='Receita cadastrada com sucesso!'
              />
            }            
          </form>
        </div>
      </main>
    </AdminTemplate>
  )
}