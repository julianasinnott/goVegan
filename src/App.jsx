import { Header } from './components/Header/index'
import { Footer } from './components/Footer/index'
import './app.css'

export function App() {
  return (  
    <div className='home'>   
      <div className="home__background"> 
        <Header />
      </div>
      <main className='home__main'>
        <section className='home__about'>
          <div className='home__about__description'>
            <h1 className='home__about__title'>
              O que é veganismo?
            </h1>
            <div className='home__about__text'>
              <p>
                “Veganismo é uma filosofia e estilo de vida que busca excluir, na medida do possível e praticável, todas as formas de exploração e crueldade contra animais na alimentação, vestuário e qualquer outra finalidade e,
                Veganismo basicamente significa humanos não explorarem outros animais, promovendo o estilo de vida vegano para benefício das pessoas, animais e meio ambiente.O vegano leva sua vida normalmente, com a diferença de pensar antes nos animais em todas as escolhas, e faz isso unicamente em respeito a eles.
              </p>
                Livre tradução de “The Vegan Society”, grupo que criou o termo “Veganismo” em 1944 no Reino Unido.
              <p>
                Como se pronuncia: ‘Vegan’ é uma palavra inglesa e lê-se ‘vígan’, ou aportuguesado: vegano ou vegana.
                por extensão, que promova o desenvolvimento e uso de alternativas livres de origem animal para benefício de humanos, animais e meio ambiente.”
              </p>
              <p>
                O Veganismo foi criado por causa da exploração dos animais nas indústrias.
                Infelizmente, a situação hoje não é menos pior: em todos os países do mundo, animais em todas as áreas são explorados sem a mínima consciência ética ou sequer respeitadas as poucas leis que serviriam para poupá-los do sofrimento.
              </p>              
            </div>
          </div>
          <div className="home__about__img">
            <img src="/assets/vegan-veganism.gif" alt="" />
          </div>
        </section>
        <section className='home__purpose'>
          <h2 className='home__purpose__title'>
            Nosso propósito
          </h2>
          <div className="home__purpose__description">
            <div className="home__purpose__img">
              <img className='purpose__img' src="/assets/purpose.png" alt="" />
            </div>
            <div className='home__purpose__types'>
              <p className='purpose__type__animals'>
                Pelos <span className='purpose__type__background'>animais</span>
              </p>
              <p className='purpose__type__environment'>
                Pelo <span className='purpose__type__background'>meio ambiente</span>
              </p>
              <p className='purpose__type__health'>
                Pela <span className='purpose__type__background'>saúde</span>
              </p>
            </div>
          </div>
          <div className="home__purpose__text">
            <p className='purpose__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo Provident similique accusantium nemo autem.
              Provident similique accusantium nemo Provident similique accusantium nemo autem.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

