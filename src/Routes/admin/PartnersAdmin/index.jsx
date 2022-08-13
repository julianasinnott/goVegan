import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";


export function PartnersAdmin() {
  return(
    <AdminTemplate>
      <AdminSection
        title={'Parceiros GoVegan'}
        data={[
          {
            name: 'nome 1'
          },
          {
            name: 'nome 2'
          },
        ]}  
      />
    </AdminTemplate>
  )
}