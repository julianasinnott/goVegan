import './index.css';
import './responsive.css';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import image from "../../assets/recipe-complete-1.png";

export function RecipeComplete() {
  return (
    <div className='container'>
      <Header type={"USER"} />
      <main className='recipe-complete'>
        <div className='recipe-complete__image-container'>
          <img className='recipe-complete__image' src={image} alt="" />
        </div>
        <h1 className='recipe-complete__title' >Avocado Toast</h1>
        <div className='recipe-complete__preparation'>
          <h2 className='recipe-complete__subtitle' >Ingredientes</h2>
          <ul className='recipe-complete__ingredients'>
            <li className='recipe-complete__item'>100 g de abacate</li>
            <li className='recipe-complete__item'>2 fatias de pão 9 grãos</li>
            <li className='recipe-complete__item'>100 g de tomate</li>
            <li className='recipe-complete__item'>10 g temperos</li>
          </ul>
          <h2 className='recipe-complete__subtitle' >Modo de fazer</h2>
          <p className='recipe-complete__preparation-mode'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse temporibus soluta qui, harum ut cupiditate laboriosam, quis officia expedita nihil dignissimos laudantium explicabo maxime voluptate, enim est sed natus!</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}