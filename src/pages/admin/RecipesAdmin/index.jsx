import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";
import '../../../components/templates/AdminTemplate/responsive.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


export function RecipesAdmin() {
  const [recipes, setRecipes] = useState([])

  useEffect(()=> {
    async function getRecipes() {
      try {
        const response = await axios.get('https://go-vegan-api.herokuapp.com/recipes')
        setRecipes(response.data)
      }
      catch (err) {
        console.error(err);
      }
    }
    getRecipes()
  },[])

  return (
    <AdminTemplate colorRecipes='--tertiary' >
      <AdminSection
        title={'Receitas GoVegan'}
        data={recipes}
      />
    </AdminTemplate>
  )
}