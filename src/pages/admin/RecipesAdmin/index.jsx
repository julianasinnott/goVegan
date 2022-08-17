import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";
import '../../../components/templates/AdminTemplate/responsive.css';


export function RecipesAdmin() {
  return (
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