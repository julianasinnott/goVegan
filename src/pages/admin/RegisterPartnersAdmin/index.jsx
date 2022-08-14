import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import "./style.css"

export function RegisterPartnersAdmin() {
    return(
      <AdminTemplate>
        <main className="main_RegisterPartners">
        <div className="content_RegisterPartners">
         <form className="form_RegisterPartners">
         <h1 className="h1_RegisterPartners">Cadastrar novo parceiro</h1>
          <input className="input_RegisterPartners" type="text" name="nome" placeholder="Nome" />
          <input className="input_RegisterPartners" type="text" name="cidade" placeholder="Cidade" />
          <input className="input_RegisterPartners" type="text" placeholder="Endereço" />
          <input className="input_RegisterPartners" type="text" placeholder="Contato" />
          <input className="input_RegisterPartners" type="text" placeholder="Upload Imagem" />
          <button className="btn_RegisterPartners" type="submit">Enviar</button>
         </form>
        </div>
      </main>
      </AdminTemplate>
    )
  }