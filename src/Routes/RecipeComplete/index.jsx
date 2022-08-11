import './index.css';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import image from "../../assets/recipe-complete-1.png";

export function RecipeComplete() {
  return (
    <div className='container'>
      <Header />
      <main className='recipe-complete'>
        <div className='image-container'>
          <img className='image' src={image} alt="" />
        </div>
        <h1>Avocado Toast</h1>
        <div className='preparation'>
          <h2>Ingredientes</h2>
          <ul className='ingredients'>
            <li>100 g de abacate</li>
            <li>2 fatias de pão 9 grãos</li>
            <li>100 g de tomate</li>
            <li>10 g temperos</li>
          </ul>
          <h2>Modo de fazer</h2>
          <p className='preparation-mode'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse temporibus soluta qui, harum ut cupiditate laboriosam, quis officia expedita nihil dignissimos laudantium explicabo maxime voluptate, enim est sed natus!</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}