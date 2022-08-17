import "./style.css"
import "./responsive.css"
import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { SearchInput } from "../../components/SearchInput";
import {Button} from "../../components/Button"
import { theme } from "../../utils/theme";
import { Card } from "../../components/Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function BlogPage() {
 
  const [newsArray, setNewsArray] = useState([]);
  const [pageSize, setPageSize] = useState(9)
  const [loading, setLoading] = useState(false)

  function handlePageSize() {
    setPageSize(pageSize + 9)
  }
 
  async function getNews() {
    try {
      setLoading(true)
      const response = await axios.get(`https://newsapi.org/v2/everything?q=VEG%20OR%20veganismo%20NOT%20MELANC%C3%93LICO%20NOT%20lexi%20NOT%20ANCA%20OR%20VEGETARIANA%20OR%20VEGANA%20OR%20vegano%20OR%20VEGETARIAN%20OR%20VEGAN%20OR%20VEGETARIANO&sortBy=POPULARITY&language=pt&pageSize=${pageSize}&apiKey=3499002376e14cdcb8fbe55906c464fc`);
      setNewsArray(response.data.articles)
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=> {
    getNews()
  }, [pageSize])

    return(
      <>
        <Header type={"USER"}/>
        <main className="main_blog">
          <h1 className="h1_blog">
            Noticias sobre veganismo
          </h1>
          <SearchInput />
          <div className="group_news">
          {newsArray?.map((news, index) => (
            <Card key={index} urlImg={news.urlToImage} item={news} color={theme.colors.white} width={300} height={430} />
          ))}
          </div>
          <Button
            value={loading ? 'Carregando...' : "Carregar mais"}
            color={theme.colors.tertiary}
            handlepageSize={handlePageSize}
          />
          {/* <div className="banner_blog">
            <h3 className="banner_title">Notícias mais recentes</h3>
            <p className="banner_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur sint mollitia numquam tempora, possimus tempore iste molestias similique culpa dolores harum doloribus tenetur a totam illum, esse optio cum.</p>
            <p className="banner_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur sint mollitia numquam tempora, possimus tempore iste molestias similique culpa dolores harum doloribus tenetur a totam illum, esse optio cum.</p>
          </div> */}
        </main>
        <Footer />
      </>
    )
    
}