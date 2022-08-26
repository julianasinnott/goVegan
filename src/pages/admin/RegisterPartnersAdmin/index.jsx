import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import api from '../../../services/api';
import * as React from 'react';
/* import useForm from "react-hook-form"; */
import "./style.css"
import "./responsive.css"

export function RegisterPartnersAdmin() {

  const [loading, setLoading] = React.useState('');
  const [urlWarning, setUrlWarning] = React.useState('');

  const [form, setForm] = React.useState(
    {
      urlToImage: '',
      title: '',
      subtitle: '',
      description: '',
      urlToContact: ''
    }
  );

  function handleChange(e) {

    if ((e.target.name === 'urlToImage' || e.target.name === 'urlToContact') && (e.target.value.includes('https://'))) {
      setUrlWarning('');
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      console.log('Entrou!');
    } else if (e.target.name === 'urlToImage') {
      setUrlWarning('A url da imagem precisa incluir "https://"')
    } else if (e.target.name === 'urlToContact') {
      setUrlWarning('A url de contato precisa incluir "https://"')
    } else {

      if (e.target.value.length > 0 && e.target.value !== '') {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        console.log(form);
      } else {
        setForm({
          ...form,
          [e.target.name]: '',
        });
      }
    }


  }
  console.log(form);

  const validationForm = (data) => {
    for (const key in form) {
      if (['', 0, null].includes(data[key])) {
        return false;
      }
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationForm(form)) {
      postPartners();
      setForm({
        urlToImage: '',
        title: '',
        subtitle: '',
        description: '',
        urlToContact: ''
      })
    } else {
      setUrlWarning('Preencha todos os campos!');
    }
  }

  async function postPartners() {
    setLoading(true)
    try {
      await api.post('/partners', form)
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false)
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
              name="urlToImage"
              className="input_RegisterPartners"
              type="text"
              placeholder="URL da imagem"
              value={form.urlToImage}
              onChange={handleChange}
              required
            />
            <input
              name="title"
              className="input_RegisterPartners"
              type="text"
              placeholder="Título"
              value={form.title}
              onChange={handleChange}
              required
            />
            <input
              name="subtitle"
              className="input_RegisterPartners"
              type="text"
              placeholder="Subtítulo"
              value={form.subtitle}
              onChange={handleChange}
              required
            />
            <input
              name="description"
              className="input_RegisterPartners"
              type="text"
              placeholder="Descrição"
              value={form.description}
              onChange={handleChange}
              required
            />
            <input
              name="urlToContact"
              className="input_RegisterPartners"
              type="text"
              placeholder="URL de contato"
              value={form.urlToContact}
              onChange={handleChange}
              required
            />
            <p className="url-warning_RegisterPartners" >{urlWarning}</p>
            <button className="btn_RegisterPartners" > {loading ? 'Enviando...' : 'Enviar'} </button>
          </form>
        </div>
      </main>
    </AdminTemplate>
  )
}