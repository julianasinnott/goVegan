import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import "./style.css"
import "./responsive.css"

export function RegisterPartnersAdmin() {
  return (
    <AdminTemplate colorPartners='--tertiary'>
      <main className="main_RegisterPartners">
        <div className="content_RegisterPartners">
          <h1 className="h1_RegisterPartners">Cadastrar novo parceiro</h1>
          <form className="form_RegisterPartners">
            <input className="input_RegisterPartners" type="text" placeholder="URL da imagem" />
            <input className="input_RegisterPartners" type="text" name="nome" placeholder="Título" />
            <input className="input_RegisterPartners" type="text" name="cidade" placeholder="Subtítulo" />
            <input className="input_RegisterPartners" type="text" placeholder="Descrição" />
            <input className="input_RegisterPartners" type="text" placeholder="URL de contato" />
            <button className="btn_RegisterPartners" type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </AdminTemplate>
  )
}