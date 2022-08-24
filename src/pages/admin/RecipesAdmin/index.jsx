import { AdminTemplate } from "../../../components/templates/AdminTemplate";
import { AdminSection } from "../../../components/templates/AdminTemplate/AdminSection";
import '../../../components/templates/AdminTemplate/responsive.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


export function RecipesAdmin() {
  const [recipes, setRecipes] = useState([])
  const [key, setKey] = useState('')

  useEffect(()=> {
    async function getRecipes() {
      try {
        const response = await axios.get(`https://go-vegan-api.herokuapp.com/recipes?q=${key}`)
        setRecipes(response.data)
      }
      catch (err) {
        console.error(err);
      }
    }
    getRecipes()
  },[key])

  function handleSearch(value) {
    setKey(value)
  }

  async function deleteRecipes(ID) {
    try {
      const response = await axios.delete(`https://go-vegan-api.herokuapp.com/recipes/${ID}`)
      setRecipes(recipes.filter(recipe => recipe.id !== ID))
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
        handleSearch={handleSearch}
        handleClick={deleteRecipes}
      />
    </AdminTemplate>
  )
}