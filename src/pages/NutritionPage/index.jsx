import "./index.css";
import "./responsive.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { FoodCard } from "./components/FoodCard";
import tacoTable from "../../features/NutritionPage/taco.json"
import { useState } from "react";

export function NutritionPage() {
  const inicialFoodsArray = tacoTable.slice(0,25)
  const [foodsArray, setFoodsArray] = useState(inicialFoodsArray)
  function handleSearch(value) {
    value ? filterFoods(value.toLowerCase()) : setFoodsArray(inicialFoodsArray)
  }
  function filterFoods(value) {
    const filteredFoods = tacoTable.filter(food => food.Descricao.toLowerCase().includes(value))
    setFoodsArray(filteredFoods.slice(0,25))
  }

  return (
    <div>
      <Header type={"USER"} />
      <main className="nutrition__main">
        <h1 className="nutrition__title">
          Dificuldade em escolher alimentos veganos na hora de montar seu prato?
        </h1>
        <h2 className="nutrition__subtitle">
          Busque as informações nutricionais na Tabela TACO
        </h2>
        <p className="nutrition__info">
          Informações baseadas em 100g do alimento 
        </p>
        <SearchInput handleSearch={handleSearch} />
        {foodsArray.length > 0  ? foodsArray.map((item, index) => (
          <FoodCard key={index} tableItem={item} />
        )) : (
          <p> Nenhum alimento encontrado :( </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
