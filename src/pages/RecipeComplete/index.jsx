import { Pizza, Cookie } from 'phosphor-react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api'
import './index.css';
import './responsive.css';

export function RecipeComplete() {
  const [selectedRecipe, setSelectedRecipe] = useState([])
  const { slug } = useParams()

  useEffect(()=> {
    async function getRecipes() {
      try {
        const response = await api.get(`/recipes?slug=${slug}`)
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
            <pre className='recipe-complete__item'>
              {selectedRecipe.ingredients}
            </pre>
          </section>
          <h2 className='recipe-complete__subtitle' >Modo de fazer</h2>
          <pre className='recipe-complete__preparation-mode'>
            {selectedRecipe.phases}
          </pre>
        </section>
      </main>
      <Footer />
    </>
  )
}