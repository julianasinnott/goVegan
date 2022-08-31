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
  const [urlWarning, setUrlWarning] = useState('');
  const [form, setForm] = useState(
    {
      slug: "",
      image: "",
      title: "",
      subtitle: "",
      ingredients: "",
      phases: "",
      type: ""
    }
  )

  function handleChange(e) {
    if (e.target.value.length > 0 && e.target.value !== '') {
      setForm({
        ...form,
        "slug": form.title.toLowerCase().replace(/ /g, "-"),
        [e.target.name]: e.target.value,
      });
    } else {
      setForm({
        ...form,
        "slug": form.title.toLowerCase().replace(/ /g, "-"),
        [e.target.name]: '',
      });
    }

    if (e.target.name === 'image' && !e.target.value.includes('https://')) {
      setUrlWarning('A url precisa incluir "https://"')
    } else {
      setUrlWarning('');
    }

    if (e.target.value === ' ') {
      setForm({
        ...form,
        "slug": form.title.toLowerCase().replace(/ /g, "-"),
        [e.target.name]: '',
      });
    }

  }

  const validationForm = (data) => {
    for (const key in form) {
      if (['', 0, null].includes(data[key])) {
        return false;
      }
    }
    return true;
  }

  const validateURL = () => {
    if ((form.image).includes('https://')) {
      return true
    };
    return false;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (validationForm(form) && validateURL()) {
      setUrlWarning('');
      await postRecipes();
      e.target.reset();
      for (const key in form) {
        form[key] = '';
      }

    } else if (!validateURL()) {
      setUrlWarning('A url precisa incluir "https://"');
    } else {
      setUrlWarning('Preencha todos os campos!');
    }

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

  return (
    <AdminTemplate colorRecipes='--tertiary'>
      <main className="main_RegisterRecipes">
        <div className="content_RegisterRecipes">
          <h1 className="h1_RegisterRecipes">Cadastrar nova receita</h1>
          <form
            onSubmit={handleSubmit}
            className="form_RegisterRecipes">
            <input
              name="image"
              className="input_RegisterRecipes"
              type="text"
              placeholder="URL da Imagem"
              value={form.image}
              onChange={handleChange}
              required
            />
            <input
              name="title"
              className="input_RegisterRecipes"
              type="text"
              placeholder="Título"
              value={form.title}
              onChange={handleChange}
              required
            />
            <input
              name="subtitle"
              className="input_RegisterRecipes"
              type="text"
              placeholder="Subtítulo"
              value={form.subtitle}
              onChange={handleChange}
              required
            />
            <textarea
              name="ingredients"
              className="text-area_RegisterRecipes"
              placeholder="Ingredientes"
              value={form.ingredients}
              onChange={handleChange}
              required
            ></textarea>
            <textarea
              name="phases"
              className="text-area_RegisterRecipes"
              placeholder="Modo de fazer"
              value={form.phases}
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
            <p className="url-warning_RegisterRecipes">{urlWarning}</p>
            <button className="btn_RegisterRecipes" type="submit">
              {loading ? 'Enviando...' : 'Enviar'}
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