import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { useState } from "react";
import { Check } from "phosphor-react";
import api  from "../../../services/api";
import "./style.css"
import "./responsive.css"

export function RegisterPartnersAdmin() {
  const [loading, setLoading] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
  const [form, setForm] = useState(
    {
      slug: "",
      urlToImage: "",
      title: "",
      subtitle: "",
      description: "",
      urlContact: ""
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
    await postPartners()
    e.target.reset()
  }

  async function postPartners() {
    setLoading(true)
    try {
      await api.post('/partners', form)
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
    <AdminTemplate colorPartners='--tertiary'>
      <main className="main_RegisterPartners">
        <div className="content_RegisterPartners">
          <h1 className="h1_RegisterPartners">Cadastrar novo parceiro</h1>
          <form
            onSubmit={handleSubmit}
            className="form_RegisterPartners"
          >
            <input
              className="input_RegisterPartners"
              type="text"
              name="urlToImage"
              placeholder="URL da imagem"
              onChange={handleChange}
            />
            <input
              className="input_RegisterPartners"
              type="text"
              name="title"
              placeholder="Nome"
              onChange={handleChange}
            />
            <input
              className="input_RegisterPartners"
              type="text"
              name="subtitle"
              placeholder="Cidade"
              onChange={handleChange}
            />
            <input
              className="input_RegisterPartners"
              type="text"
              name="description"
              placeholder="Endereço"
              onChange={handleChange}
            />
            <input
              className="input_RegisterPartners"
              type="text"
              name="urlContact"
              placeholder="URL de contato" 
              onChange={handleChange}
            />
            <button className="btn_RegisterPartners" type="submit">
              {loading? 'Enviando...' : 'Enviar'}
            </button>
            {
              successMessage && 
              <div className="success-msg__RegisterPartners">
                <p> Parceiro cadastrado com sucesso! </p>
                <Check 
                  className="check-icon"
                  size={34}
                  color="var(--white)"
                />        
              </div>
            } 
          </form>
        </div>
      </main>
    </AdminTemplate>
  )
}