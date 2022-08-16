import "./style.css"
import "./responsive.css"
import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { SearchInput } from "../../components/SearchInput";
import {Button} from "../../components/Button"
import { theme } from "../../utils/theme";
import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"
import { Card } from "../../components/Card";


export function BlogPage() {
  const news = [
    {title: 'Mercado de leite de castanha-de-caju atingirá US$ 382,7 milhões até 2032.',
     img: news1,
     subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximmollitia...'
    },
    {title: 'Mercado de sorvete vegano atingirá US$ 1,01 bilhão até 2029.',
     img: news2,
     subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximmollitia...',
    },
    {title: 'N.OVO lança croquete de porco plant-based.',
     img: news3,
     subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximmollitia...'
    },
  ]
    return(
      <>
        <Header type={"USER"}/>
        <main className="main_blog">
          <h1 className="h1_blog">
            Noticias sobre veganismo
          </h1>
          <SearchInput />
          <div className="group_news">
          {news?.map((news, index) => (
            <Card key={index} item={news} color={theme.colors.white} width={300} height={330} />
          ))}
            {/* <div className="news">
              <img className="news-img" src={news1} alt="" />
              <p className="news-text">Mercado de leite de castanha-de-caju atingirá US$ 382,7 milhões até 2032.</p>
            </div>
            <div>
              <img className="news-img" src={news2} alt="" />
              <p className="news-text">Mercado de sorvete vegano atingirá US$ 1,01 bilhão até 2029.</p>
            </div>
            <div>
              <img className="news-img" src={news3} alt="" />
              <p className="news-text">N.OVO lança croquete de porco plant-based.</p>
            </div> */}
          </div>
          <Button
              value="Carregar mais"
              color={theme.colors.tertiary}
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