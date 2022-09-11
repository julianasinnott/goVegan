import "./index.css";
import "./responsive.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/index";
import { theme } from "../../utils/theme";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../services/api'
import { SearchInput } from "../../components/SearchInput";

export function RecipesPage() {
  const recipesArray = []
  const [pageSizeSalgado, setPageSizeSalgado] = useState(3)
  const [pageSizeDoce, setPageSizeDoce] = useState(3)
  const [type, setType] = useState('SALGADAS')
  const [recipes, setRecipes] = useState([])
  const [key, setKey] = useState('')

  useEffect(()=> {
    async function getRecipes() {
      try {
        const response = await api.get(`/recipes?_sort=id&_order=desc&q=${key}`)
        setRecipes(response.data)
      }
      catch (err) {
        console.error(err);
      }
    }
    getRecipes()
  },[key]) 

  function getRecipesLength() {    
    const recipesLength = recipes.filter(recipe => recipe.type == type).length
    return recipesLength
  }
  
  function handlePageSize() {
    if (type === 'SALGADAS') {
      recipes.map(recipe => {
        if (recipe.type === type && recipesArray.length < pageSizeSalgado) {
          let item = recipe
          recipesArray.push(item);
        }
      });
    } else {
      recipes.map(recipe => {
        if (recipe.type === type && recipesArray.length < pageSizeDoce) {
          let item = recipe
          recipesArray.push(item);
        }
      });
    }
  }

  handlePageSize()

  function upadetArray() {
    if (type === 'SALGADAS') {
      setPageSizeSalgado(pageSizeSalgado + 3);
    } else {
      setPageSizeDoce(pageSizeDoce + 3);
    }
  }

  const render = recipesArray.map((recipe, index) => (
    recipe.type === type &&
    <Link target={'blank'} key={index} to={`/receitas/${recipe.slug}`}>
      <Card
        key={index}
        item={recipe}
        color={theme.colors.quaternary}
        width={300}
        height={320}
      />
    </Link>
  ))
  
  useEffect(() => {
    render
  }, [type])          
   
  return (
    <>      
    <div>
      <Header type={"USER"} />
      <main className="recipes__main">
        <h1 className="recipes__title">
          Escolha uma das opções abaixo e mostraremos para você seleções
          incríveis!
        </h1>
        <div className="recipes__select-section">
          <Button handleClick={setType} value="SALGADAS" color={type === 'SALGADAS' ? theme.colors.secundary : theme.colors.primary} />
          <div className="options-divisor">|</div>
          <Button handleClick={setType} value="DOCES" color={type === 'DOCES' ? theme.colors.secundary : theme.colors.primary} />
        </div>
        <SearchInput handleSearch={(value)=> setKey(value)} />
        <section className="recipes-section">
          {render}
        </section>
        {
          recipesArray.length < getRecipesLength() && 
          <Button handleClick={upadetArray} value="Carregar mais" color={theme.colors.secundary} />
        }        
      </main>
      <Footer />
    </div>
    </>
  );
}
