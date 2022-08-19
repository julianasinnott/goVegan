import { ArrowLeft } from 'phosphor-react';
import './index.css';
import './responsive.css';

export function RecipeComplete({selectedRecipe, handleClick}) {
  return (
    <main className='recipe-complete'>
      <ArrowLeft
        onClick={handleClick}
        className='recipe-complete__icon-arrow'
      />
      <div className='recipe-complete__image-container'>
        <img className='recipe-complete__image' src={selectedRecipe.urlToImage} alt="" />
      </div>
      <h1 className='recipe-complete__title' >{selectedRecipe.title}</h1>
      <section className='recipe-complete__preparation'>
        <h2 className='recipe-complete__subtitle' >Ingredientes</h2>
        <section className='recipe-complete__ingredients'>
          <p className='recipe-complete__item'>{selectedRecipe.ingredients}</p>
        </section>
        <h2 className='recipe-complete__subtitle' >Modo de fazer</h2>
        <p className='recipe-complete__preparation-mode'>{selectedRecipe.phases}</p>
      </section>
    </main>
  )
}