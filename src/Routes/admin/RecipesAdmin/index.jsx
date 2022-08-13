import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";


export function RecipesAdmin() {
  return(
    <AdminTemplate>
      <AdminSection
        title={'Receitas GoVegan'}
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