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

export function RecipesPage() {
  const recipesArray = []
  const [pageSizeSalgado, setPageSizeSalgado] = useState(5)
  const [pageSizeDoce, setPageSizeDoce] = useState(5)
  const [type, setType] = useState('SALGADAS')
  const [recipes, setRecipes] = useState([])

  useEffect(()=> {
    async function getRecipes() {
      try {
        const response = await api.get('/recipes?_sort=id&_order=desc')
        setRecipes(response.data)
      }
      catch (err) {
        console.error(err);
      }
    }
    getRecipes()
  },[]) 

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

  const render = recipesArray.map((recipe, index) => (
    recipe.type === type &&
    <Link target={'blank'} key={index} to={`/receitas/${recipe.slug}`}>
      <Card
        key={index}
        item={recipe}
        color={theme.colors.quaternary}
        width={200}
        height={250}
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
        <section className="recipes-section">
          {render}
        </section>
        <Button handleClick={upadetArray} value="Carregar mais" color={theme.colors.secundary} />
      </main>
      <Footer />
    </div>
    </>
  );
}
