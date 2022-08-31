import "./style.css"
import "./responsive.css"
import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { SearchInput } from "../../components/SearchInput";
import {Button} from "../../components/Button"
import { theme } from "../../utils/theme";
import { Card } from "../../components/Card";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export function BlogPage() { 
  const [newsArray, setNewsArray] = useState([]);
  const [pageSize, setPageSize] = useState(3)
  const [loading, setLoading] = useState(false)
  const [key, setKey] = useState('')

  useEffect(()=> {
    async function getNews() {
      try {
        setLoading(true)        
        const response = await axios.get(`https://gnews.io/api/v4/search?q=(vegan OR veganismo OR vegano OR vegetariano OR vegetariana OR vegana NOT pediatra NOT prisao NOT xuxa NOT pobre NOT mato NOT aspargo NOT irrita NOT onVeg NOT FOLHAPRESS)${key && `AND ${key}`}&lang=pt&max=${pageSize}&token=2559bbabb022e56c41938b55f3e57df1`);
        setNewsArray(response.data.articles)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false)
      }
    }
    getNews()
  }, [pageSize, key])

  return(
    <>
      <Header type={"USER"}/>
      <main className="main_blog">
        <h1 className="h1_blog">
          Noticias sobre veganismo
        </h1>
        <SearchInput handleSearch={(value)=> setKey(value)} />
        <div className="group_news">
        {newsArray.length > 0 ?
         newsArray.map((news, index) => (
          <a key={index} target='blank' href={news.url}>
            <Card 
              key={index} 
              item={news} 
              color={theme.colors.white} 
              width={300} 
              height={500} />
         </a>
        ))
        :
          <p> Notícia não encontrada :( </p>
        }
        </div>
        <Button
          value={
            loading ?
            'Carregando...' 
            :
            "Carregar mais"
          }
          color={theme.colors.tertiary}
          handleClick={()=> setPageSize(pageSize + 3)}
        />
      </main>
      <Footer />
    </>
  )    
}