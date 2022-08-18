import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card/index";
import ImgFoodMock from "/assets/img-food-mock.png";
import "./index.css";
import "./responsive.css";
import { theme } from "../../utils/theme";


export function RecipesPage() {
  const recipes = [
    {
      urlToImage: ImgFoodMock,
      title: "Título da Receita",
    },
    {
      urlToImage: ImgFoodMock,
      title: "Título da Receita",
    },
    {
      urlToImage: ImgFoodMock,
      title: "Título da Receita",
    },
    {
      urlToImage: ImgFoodMock,
      title: "Título da Receita",
    },
  ];
  return (
    <div>
      <Header type={"USER"} />
      <main className="recipes__main">
        <h1 className="recipes__title">
          Escolha uma das opções abaixo e mostraremos para você seleções
          incríveis!
        </h1>
        <div className="recipes__select-section">
          <Button value="SALGADAS" color={theme.colors.primary} />
          <div className="options-divisor">|</div>
          <Button value="DOCES" color={theme.colors.secundary} />
        </div>
        <section className="recipes-section">
          {recipes.map((recipe, index) => (
            <Card key={index} item={recipe} color={theme.colors.quaternary} width={200}/>
          ))}
        </section>
        <Button value="Carregar mais" color={theme.colors.secundary} />
      </main>
      <Footer />
    </div>
  );
}
