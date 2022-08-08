import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import './index.css'
import { SearchInput } from "../../components/SearchInput";
import { FoodCard } from "./components/FoodCard";


export function NutritionPage() {

  const mockTable = [
    {
      Descricao: "Abacate, cru",    
      Energia: 96.1547,
      Proteina: 1.23913,
      Lipideos: 8.39666,
      CHO: 6.03086,
    },
    {
      Descricao: "Abacaxi, cru",
      Energia: 48.32221,
      Proteina: 0.85869,
      Lipideos: 0.12333,
      CHO: 12.33463,
    },
    {
      Descricao: "Abacaxi, polpa, congelada",
      Energia: 30.59179,
      Proteina: 0.46666,
      Lipideos: 0.11333,
      CHO: 7.79866,
    }
  ]

  return(
    <div>
      <Header />
      <main className="nutrition__main">
        <h1 className="nutrition__title">
          Dificuldade em escolher alimentos veganos na hora de montar seu prato?
        </h1>
        <h2 className="nutrition__subtitle">
        Busque as informações nutricionais na Tabela TACO
        </h2>
        <p className="nutrition__info">
          - Informações baseadas em 100g do alimento -
        </p>
        <SearchInput />
        {mockTable.map((item, index) =>
          <FoodCard key={index} tableItem={item}/>
        )}
      </main>
      <Footer />
    </div>
  )
}