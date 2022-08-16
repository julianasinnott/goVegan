import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Card } from "../../components/Card";
import MockImg from "/assets/mock-img.png";
import "./index.css";
import "./responsive.css";
import { theme } from "../../utils/theme";

export function PartnersPage() {
  const partners = [
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
    {
      img: MockImg,
      title: "Paraíso Vegano",
      subtitle: "Pelotas",
      description: "Rua Lobo da Costa 1492",
      url: "https://www.google.com",
    },
  ];
  return (
    <div>
      <Header type={"USER"} />
      <main className="partners__main">
        <h2 className="partners__subtitle">Cadastre-se e garanta seu cupom de desconto</h2>
        <h1 className="partners__title"> Parceiros na sua cidade</h1>
        <SearchInput />
        <section className="partners__section">
          {partners?.map((partner, index) => (
            <Card key={index} item={partner} />
          ))}
        </section>
        <Button value="Carregar mais" color={theme.colors.secundary} />
      </main>
      <Footer />
    </div>
  );
}
