import "./index.css";
import "./responsive.css";
import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";

export function App() {
  return (
    <div className="home">
      <div className="home__background">
        <Header type={"USER"} />
      </div>
      <main className="home__main">
        <section className="home__about">
          <div className="home__about__description">
            <h1 className="home__about__title">O que é veganismo?</h1>
            <div className="home__about__text">
              <p>
                “Veganismo é uma filosofia e estilo de vida que busca excluir,
                na medida do possível e praticável, todas as formas de
                exploração e crueldade contra animais na alimentação, vestuário
                e qualquer outra finalidade e, Veganismo basicamente significa
                humanos não explorarem outros animais, promovendo o estilo de
                vida vegano para benefício das pessoas, animais e meio
                ambiente.O vegano leva sua vida normalmente, com a diferença de
                pensar antes nos animais em todas as escolhas, e faz isso
                unicamente em respeito a eles.
              </p>
              Livre tradução de “The Vegan Society”, grupo que criou o termo
              “Veganismo” em 1944 no Reino Unido.
              <p>
                Como se pronuncia: ‘Vegan’ é uma palavra inglesa e lê-se
                ‘vígan’, ou aportuguesado: vegano ou vegana. por extensão, que
                promova o desenvolvimento e uso de alternativas livres de origem
                animal para benefício de humanos, animais e meio ambiente.”
              </p>
              <p>
                O Veganismo foi criado por causa da exploração dos animais nas
                indústrias. Infelizmente, a situação hoje não é menos pior: em
                todos os países do mundo, animais em todas as áreas são
                explorados sem a mínima consciência ética ou sequer respeitadas
                as poucas leis que serviriam para poupá-los do sofrimento.
              </p>
            </div>
          </div>
          <div className="home__about__picture">
            <img className="home__about__picture-img" src="/assets/vegan-veganism.gif" alt="" />
          </div>
        </section>
        <section className="home__purpose">
          <h2 className="home__purpose__title">Nosso propósito</h2>
          <div className="home__purpose__description">
            <div className="home__purpose__img">
              <img className="purpose__img" src="/assets/purpose.png" alt="" />
            </div>
            <div className="home__purpose__types">
              <p className="purpose__type__animals">
                Pelos <span className="purpose__type__background">animais</span>
              </p>
              <p className="purpose__type__environment">
                Pelo{" "}
                <span className="purpose__type__background">meio ambiente</span>
              </p>
              <p className="purpose__type__health">
                Pela <span className="purpose__type__background">saúde</span>
              </p>
            </div>
          </div>
          <div className="home__purpose__text">
            <p className="purpose__text">
              Deixando produtos de origem animal fora do prato por UM DIA, você: 
            </p>
            <p className="purpose__text">
              Salva a vida de um animal. 
            </p>
            <p className="purpose__text">
              Deixa de emitir 14kg de CO₂
            </p>
            <p className="purpose__text">
              Economiza 3400 litros de água
            </p>
            <p className="purpose__text">
              Poupa 24 m2 de terras
            </p>
            <p className="purpose__text">
              Poupa 7 Kg de grãos.
            </p>
            <p className="purpose__text">
              Imagine o impacto positivo se repetido todos os dias!
            </p>
            <p className="purpose__text">
              POR UM MUNDO MELHOR... 
              CONSIDERE O VEGANISMO. ♥
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
