import "./index.css";
import "./responsive.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/index";
import { theme } from "../../utils/theme";
import { useEffect, useState } from "react";
import { RecipeComplete } from "./components/RecipeComplete";
import recipes from "../../features/RecipesPage/recipes.json"

export function RecipesPage() {

  const recipesArray = []
  const [pageSizeSalgado, setPageSizeSalgado] = useState(5)
  const [pageSizeDoce, setPageSizeDoce] = useState(5)
  const [type, setType] = useState('SALGADAS')
  const [hasClick, setHasClick] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState('')

  function handleType(value) {
    setType(value)
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
      setPageSizeSalgado(pageSizeSalgado + 5);
    } else {
      setPageSizeDoce(pageSizeDoce + 5);
    }
  }

  function handleClick(recipe) {
    setHasClick(!hasClick)
    setSelectedRecipe(recipe)
  }

  const render = recipesArray.map((recipe, index) => (
    recipe.type === type &&
    <Card
      handleClick={() => handleClick(recipe)}
      key={index}
      item={recipe}
      color={theme.colors.quaternary}
      width={200}
      height={250}
     />
  ))
  
  useEffect(() => {
    render
  }, [type])          
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hasClick]);
  
  return (
    <>      
    <div>
      <Header type={"USER"} />
      {hasClick?
      <RecipeComplete
        handleClick={handleClick}
        selectedRecipe={selectedRecipe}
      />
      :
      <main className="recipes__main">
        <h1 className="recipes__title">
          Escolha uma das opções abaixo e mostraremos para você seleções
          incríveis!
        </h1>
        <div className="recipes__select-section">
          <Button handleClick={handleType} value="SALGADAS" color={type === 'SALGADAS' ? theme.colors.secundary : theme.colors.primary} />
          <div className="options-divisor">|</div>
          <Button handleClick={handleType} value="DOCES" color={type === 'DOCES' ? theme.colors.secundary : theme.colors.primary} />
        </div>
        <section className="recipes-section">
          {render}
        </section>
        <Button handleClick={upadetArray} value="Carregar mais" color={theme.colors.secundary} />
      </main>
      }
      <Footer />
    </div>
    </>
  );
}
