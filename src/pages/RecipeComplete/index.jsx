import { Pizza, Cookie } from 'phosphor-react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import './index.css';
import './responsive.css';

export function RecipeComplete() {
  const [selectedRecipe, setSelectedRecipe] = useState([])
  const { slug } = useParams()

  useEffect(()=> {
    async function getRecipes() {
      try {
        const response = await axios.get(`https://go-vegan-api.herokuapp.com/recipes?slug=${slug}`)
        setSelectedRecipe(response.data[0]) 
      }
      catch (err) {
        console.error(err);
      }
    }
    getRecipes()
  },[]) 

  return (
    <>
      <Header type={"USER"} />
      <main className='recipe-complete'>
        {selectedRecipe.type === 'DOCES'?
          <Cookie size={55} className='recipe-complete__icon' />
        :
          <Pizza size={55} className='recipe-complete__icon' />
        }
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
      <Footer />
    </>
  )
}