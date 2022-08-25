import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";
import '../../../components/templates/AdminTemplate/responsive.css';
import { useState } from "react";
import { useEffect } from "react";
import api from '../../../services/api'


export function RecipesAdmin() {
  const [recipes, setRecipes] = useState([])
  const [key, setKey] = useState('')

  async function getRecipes() {
    try {
      const response = await api.get(`/recipes?q=${key}`)
      setRecipes(response.data)
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(()=> {
    getRecipes()
  },[key])

  async function deleteRecipes(ID) {
    try {
      await api.delete(`/recipes/${ID}`)
      getRecipes()
    }
    catch (err) {a
      console.error(err);
    }
  }

  return (
    <AdminTemplate colorRecipes='--tertiary' >
      <AdminSection
        title={'Receitas GoVegan'}
        data={recipes}
        handleSearch={setKey}
        handleClick={deleteRecipes}
      />
    </AdminTemplate>
  )
}