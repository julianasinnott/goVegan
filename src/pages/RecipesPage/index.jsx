import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/index";
import "./index.css";
import "./responsive.css";
import { theme } from "../../utils/theme";
import recipes from "../../features/RecipesPage/recipes.json"
import { useEffect, useState } from "react";

export function RecipesPage() {
  const [type, setType] = useState('SALGADAS')
  function handleType(value) {
    setType(value)
  }
  const render = recipes.map((recipe, index) => (
    recipe.type === type &&
    <Card
      key={index}
      item={recipe}
      color={theme.colors.quaternary}
      width={200}
      height={250}
     />
  ))
  useEffect(()=> {
    render
  }, [type])          
 
  return (
    <div>
      <Header type={"USER"} />
      <main className="recipes__main">
        <h1 className="recipes__title">
          Escolha uma das opções abaixo e mostraremos para você seleções
          incríveis!
        </h1>
        <div className="recipes__select-section">
          <Button handleClick={handleType} value="SALGADAS" color={type === 'SALGADAS'? theme.colors.secundary : theme.colors.primary} />
          <div className="options-divisor">|</div>
          <Button handleClick={handleType} value="DOCES" color={type === 'DOCES'? theme.colors.secundary : theme.colors.primary} />
        </div>
        <section className="recipes-section">        
          {render}
        </section>
        <Button value="Carregar mais" color={theme.colors.secundary} />
      </main>
      <Footer />
    </div>
  );
}
